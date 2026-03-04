"use client"

import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import emailjs from '@emailjs/browser'

// ============================================
// CONFIGURACIÓN DE EMAILJS
// ============================================
const EMAILJS_SERVICE_ID = 'service_nfw85eh'   // Tu Service ID
const EMAILJS_TEMPLATE_ID = 'template_td57w6v' // Tu Template ID (crear uno nuevo para inscripciones)
const EMAILJS_PUBLIC_KEY = 'SxnDM79aYmIpqqg9y'    // Tu Public Key

// ============================================

interface CourseInfo {
  id: string
  title: string
  level: string
  price: string
  duration: string
}

interface InscripcionFormProps {
  course: CourseInfo
}

interface FormData {
  nombre_completo: string
  cedula: string
  fecha_nacimiento: string
  ciudad: string
  direccion: string
  email: string
  celular: string
  tiene_camara: string
  observacion: string
}

interface FormErrors {
  nombre_completo?: string
  cedula?: string
  fecha_nacimiento?: string
  ciudad?: string
  direccion?: string
  email?: string
  celular?: string
  tiene_camara?: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function InscripcionForm({ course }: InscripcionFormProps) {
  const [formData, setFormData] = useState<FormData>({
    nombre_completo: '',
    cedula: '',
    fecha_nacimiento: '',
    ciudad: '',
    direccion: '',
    email: '',
    celular: '',
    tiene_camara: '',
    observacion: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.nombre_completo.trim()) {
      newErrors.nombre_completo = 'El nombre completo es requerido'
    }

    if (!formData.cedula.trim()) {
      newErrors.cedula = 'La cédula es requerida'
    }

    if (!formData.fecha_nacimiento) {
      newErrors.fecha_nacimiento = 'La fecha de nacimiento es requerida'
    }

    if (!formData.ciudad.trim()) {
      newErrors.ciudad = 'La ciudad es requerida'
    }

    if (!formData.direccion.trim()) {
      newErrors.direccion = 'La dirección es requerida'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.celular.trim()) {
      newErrors.celular = 'El celular es requerido'
    }

    if (!formData.tiene_camara) {
      newErrors.tiene_camara = 'Por favor indicá si tenés cámara propia'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          curso: course.title,
          nivel: course.level,
          precio: course.price,
          nombre_completo: formData.nombre_completo,
          cedula: formData.cedula,
          fecha_nacimiento: formData.fecha_nacimiento,
          ciudad: formData.ciudad,
          direccion: formData.direccion,
          email: formData.email,
          celular: formData.celular,
          tiene_camara: formData.tiene_camara === 'si' ? 'Sí' : 'No',
          observacion: formData.observacion || 'Sin observaciones',
        },
        EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      // Scroll al inicio para mostrar el mensaje de éxito
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      // Scroll al inicio para mostrar el mensaje de error
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Pantalla de éxito
  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-green-600/20 mx-auto mb-6">
          <Icon icon="mdi:check-circle" className="w-12 h-12 text-green-500" />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-3">¡Inscripción enviada!</h3>
        <p className="text-neutral-400 font-light mb-4 max-w-md mx-auto">
          Recibimos tu solicitud de inscripción al curso <strong className="text-white">{course.title}</strong>.
        </p>
        <div className="bg-orange-600/10 border border-orange-600/30 rounded-xl p-4 max-w-md mx-auto mb-8">
          <p className="text-orange-400 text-sm font-light">
            <strong className="font-medium">Siguiente paso:</strong> Realizá la transferencia y enviá el comprobante por WhatsApp para confirmar tu lugar.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://wa.me/595973497799?text=Hola! Acabo de completar el formulario de inscripción para el curso de Nivel Inicial. Adjunto mi comprobante de pago."
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
          >
            <Icon icon="mdi:whatsapp" className="w-5 h-5" />
            Enviar comprobante
          </Link>
          <Link
            href="/cursos"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-700 text-white font-light rounded-full hover:border-orange-600 hover:text-orange-600 transition-colors"
          >
            Volver a cursos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Info del curso seleccionado */}
      <div className="bg-orange-600/10 border border-orange-600/30 rounded-2xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-600/20">
            <Icon icon="mdi:school-outline" className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <p className="text-white font-semibold text-lg">{course.title}</p>
            <p className="text-neutral-400 text-sm font-light">{course.duration} • {course.level}</p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-orange-600/20">
          <span className="text-neutral-400 font-light">Inversión mensual</span>
          <span className="text-white text-xl font-semibold">{course.price}</span>
        </div>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Error general */}
        {status === 'error' && (
          <div className="flex items-start gap-3 p-4 bg-red-600/10 border border-red-600/30 rounded-xl">
            <Icon icon="mdi:alert-circle" className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-400 text-sm font-medium">Error al enviar la inscripción</p>
              <p className="text-red-400/70 text-sm font-light mt-1">
                Intentá de nuevo o contactanos por{' '}
                <a href="https://wa.me/595973497799" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-300">WhatsApp</a>
              </p>
            </div>
          </div>
        )}

        {/* Datos personales */}
        <div>
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Icon icon="mdi:account-outline" className="w-5 h-5 text-orange-600" />
            Datos personales
          </h3>
          
          <div className="space-y-4">
            {/* Nombre completo */}
            <div>
              <label htmlFor="nombre_completo" className="block text-white text-sm font-medium mb-2">
                Nombre y apellido completos <span className="text-orange-600">*</span>
              </label>
              <input
                type="text"
                id="nombre_completo"
                name="nombre_completo"
                value={formData.nombre_completo}
                onChange={handleChange}
                placeholder="Juan Carlos Pérez González"
                disabled={status === 'sending'}
                className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-500 font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all duration-200 disabled:opacity-50 ${
                  errors.nombre_completo ? 'border-red-500' : 'border-neutral-700 focus:border-orange-600'
                }`}
              />
              {errors.nombre_completo && (
                <p className="mt-1.5 text-red-400 text-sm font-light flex items-center gap-1">
                  <Icon icon="mdi:alert-circle" className="w-4 h-4" />{errors.nombre_completo}
                </p>
              )}
            </div>

            {/* Cédula y Fecha de nacimiento */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cedula" className="block text-white text-sm font-medium mb-2">
                  Cédula de identidad <span className="text-orange-600">*</span>
                </label>
                <input
                  type="text"
                  id="cedula"
                  name="cedula"
                  value={formData.cedula}
                  onChange={handleChange}
                  placeholder="1.234.567"
                  disabled={status === 'sending'}
                  className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-500 font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all duration-200 disabled:opacity-50 ${
                    errors.cedula ? 'border-red-500' : 'border-neutral-700 focus:border-orange-600'
                  }`}
                />
                {errors.cedula && (
                  <p className="mt-1.5 text-red-400 text-sm font-light flex items-center gap-1">
                    <Icon icon="mdi:alert-circle" className="w-4 h-4" />{errors.cedula}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="fecha_nacimiento" className="block text-white text-sm font-medium mb-2">
                  Fecha de nacimiento <span className="text-orange-600">*</span>
                </label>
                <input
                  type="date"
                  id="fecha_nacimiento"
                  name="fecha_nacimiento"
                  value={formData.fecha_nacimiento}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all duration-200 disabled:opacity-50 ${
                    errors.fecha_nacimiento ? 'border-red-500' : 'border-neutral-700 focus:border-orange-600'
                  }`}
                />
                {errors.fecha_nacimiento && (
                  <p className="mt-1.5 text-red-400 text-sm font-light flex items-center gap-1">
                    <Icon icon="mdi:alert-circle" className="w-4 h-4" />{errors.fecha_nacimiento}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Ubicación */}
        <div>
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Icon icon="mdi:map-marker-outline" className="w-5 h-5 text-orange-600" />
            Ubicación
          </h3>
          
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="ciudad" className="block text-white text-sm font-medium mb-2">
                  Ciudad <span className="text-orange-600">*</span>
                </label>
                <input
                  type="text"
                  id="ciudad"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                  placeholder="Asunción"
                  disabled={status === 'sending'}
                  className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-500 font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all duration-200 disabled:opacity-50 ${
                    errors.ciudad ? 'border-red-500' : 'border-neutral-700 focus:border-orange-600'
                  }`}
                />
                {errors.ciudad && (
                  <p className="mt-1.5 text-red-400 text-sm font-light flex items-center gap-1">
                    <Icon icon="mdi:alert-circle" className="w-4 h-4" />{errors.ciudad}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="direccion" className="block text-white text-sm font-medium mb-2">
                  Dirección <span className="text-orange-600">*</span>
                </label>
                <input
                  type="text"
                  id="direccion"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  placeholder="Av. España 1234"
                  disabled={status === 'sending'}
                  className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-500 font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all duration-200 disabled:opacity-50 ${
                    errors.direccion ? 'border-red-500' : 'border-neutral-700 focus:border-orange-600'
                  }`}
                />
                {errors.direccion && (
                  <p className="mt-1.5 text-red-400 text-sm font-light flex items-center gap-1">
                    <Icon icon="mdi:alert-circle" className="w-4 h-4" />{errors.direccion}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Icon icon="mdi:phone-outline" className="w-5 h-5 text-orange-600" />
            Contacto
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                Correo electrónico <span className="text-orange-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                disabled={status === 'sending'}
                className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-500 font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all duration-200 disabled:opacity-50 ${
                  errors.email ? 'border-red-500' : 'border-neutral-700 focus:border-orange-600'
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-red-400 text-sm font-light flex items-center gap-1">
                  <Icon icon="mdi:alert-circle" className="w-4 h-4" />{errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="celular" className="block text-white text-sm font-medium mb-2">
                Celular <span className="text-orange-600">*</span>
              </label>
              <input
                type="tel"
                id="celular"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                placeholder="0981 123 456"
                disabled={status === 'sending'}
                className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-500 font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all duration-200 disabled:opacity-50 ${
                  errors.celular ? 'border-red-500' : 'border-neutral-700 focus:border-orange-600'
                }`}
              />
              {errors.celular && (
                <p className="mt-1.5 text-red-400 text-sm font-light flex items-center gap-1">
                  <Icon icon="mdi:alert-circle" className="w-4 h-4" />{errors.celular}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div>
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Icon icon="mdi:camera-outline" className="w-5 h-5 text-orange-600" />
            Información adicional
          </h3>
          
          <div className="space-y-4">
            {/* ¿Tiene cámara? */}
            <div>
              <label className="block text-white text-sm font-medium mb-3">
                ¿Tenés cámara propia? <span className="text-orange-600">*</span>
              </label>
              <div className="flex gap-4">
                <label className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                  formData.tiene_camara === 'si' 
                    ? 'bg-orange-600/20 border-orange-600 text-white' 
                    : 'bg-neutral-800/50 border-neutral-700 text-neutral-400 hover:border-neutral-600'
                }`}>
                  <input
                    type="radio"
                    name="tiene_camara"
                    value="si"
                    checked={formData.tiene_camara === 'si'}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="sr-only"
                  />
                  <Icon icon="mdi:check-circle" className={`w-5 h-5 ${formData.tiene_camara === 'si' ? 'text-orange-600' : 'text-neutral-600'}`} />
                  <span className="font-medium">Sí, tengo</span>
                </label>
                <label className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                  formData.tiene_camara === 'no' 
                    ? 'bg-orange-600/20 border-orange-600 text-white' 
                    : 'bg-neutral-800/50 border-neutral-700 text-neutral-400 hover:border-neutral-600'
                }`}>
                  <input
                    type="radio"
                    name="tiene_camara"
                    value="no"
                    checked={formData.tiene_camara === 'no'}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="sr-only"
                  />
                  <Icon icon="mdi:close-circle" className={`w-5 h-5 ${formData.tiene_camara === 'no' ? 'text-orange-600' : 'text-neutral-600'}`} />
                  <span className="font-medium">No tengo</span>
                </label>
              </div>
              {errors.tiene_camara && (
                <p className="mt-1.5 text-red-400 text-sm font-light flex items-center gap-1">
                  <Icon icon="mdi:alert-circle" className="w-4 h-4" />{errors.tiene_camara}
                </p>
              )}
              {formData.tiene_camara === 'no' && (
                <p className="mt-2 text-neutral-500 text-sm font-light">
                  No te preocupes, tenemos cámaras disponibles para alquilar durante las clases.
                </p>
              )}
            </div>

            {/* Observación */}
            <div>
              <label htmlFor="observacion" className="block text-white text-sm font-medium mb-2">
                Observación <span className="text-neutral-500 font-light">(opcional)</span>
              </label>
              <textarea
                id="observacion"
                name="observacion"
                value={formData.observacion}
                onChange={handleChange}
                placeholder="¿Hay algo que debamos saber? ¿Tenés alguna consulta?"
                rows={3}
                disabled={status === 'sending'}
                className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 focus:border-orange-600 transition-all duration-200 resize-none disabled:opacity-50"
              />
            </div>
          </div>
        </div>

        {/* Métodos de pago */}
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Icon icon="mdi:bank-outline" className="w-5 h-5 text-orange-600" />
            Método de pago
          </h3>
          
          <div className="bg-neutral-800/50 rounded-xl p-4 mb-4">
            <p className="text-white font-medium mb-2">Transferencia Bancaria</p>
            <div className="space-y-1 text-sm">
              <p className="text-neutral-400 font-light">
                <span className="text-neutral-300">Banco:</span> ITAÚ
              </p>
              <p className="text-neutral-400 font-light">
                <span className="text-neutral-300">Cuenta Corriente:</span> 701707459
              </p>
              <p className="text-neutral-400 font-light">
                <span className="text-neutral-300">Titular:</span> Manuel Pellón
              </p>
              <p className="text-neutral-400 font-light">
                <span className="text-neutral-300">CI:</span> 4321671
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-green-600/10 border border-green-600/30 rounded-xl">
            <Icon icon="mdi:whatsapp" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-green-400 text-sm font-medium">Importante</p>
              <p className="text-green-400/80 text-sm font-light mt-1">
                Una vez realizado el pago, enviá el comprobante al WhatsApp{' '}
                <a href="https://wa.me/595973497799" target="_blank" rel="noopener noreferrer" className="underline font-medium">
                  0973 497 799
                </a>{' '}
                para confirmar tu inscripción.
              </p>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
          >
            {status === 'sending' ? (
              <>
                <Icon icon="mdi:loading" className="w-5 h-5 animate-spin" />
                Enviando inscripción...
              </>
            ) : (
              <>
                Enviar inscripción
                <Icon icon="mdi:arrow-right" className="w-5 h-5" />
              </>
            )}
          </button>
          <p className="text-neutral-500 text-sm font-light text-center mt-4">
            Al enviar, aceptás nuestros{' '}
            <Link href="/institucional/terminos-y-condiciones" className="text-orange-600 hover:underline">
              términos y condiciones
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}