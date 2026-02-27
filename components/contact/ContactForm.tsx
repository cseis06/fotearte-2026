"use client"

import React, { useState } from 'react'
import { Icon } from '@iconify/react'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const subjects = [
  { value: '', label: 'Seleccioná un tema' },
  { value: 'cursos', label: 'Información sobre cursos' },
  { value: 'alquiler', label: 'Alquiler de equipos' },
  { value: 'inscripcion', label: 'Inscripción' },
  { value: 'corporativo', label: 'Servicio corporativo' },
  { value: 'otro', label: 'Otro' },
]

const CONTACT_EMAIL = 'info@fotearte.com.py'

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [showSuccess, setShowSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Limpiar error al escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    // Obtener texto del asunto
    const subjectText = formData.subject 
      ? subjects.find(s => s.value === formData.subject)?.label 
      : 'Consulta general'
    
    // Construir cuerpo del email
    const mailtoBody = `
Hola FoteArte,

${formData.message}

---
Datos de contacto:
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone || 'No proporcionado'}
    `.trim()

    // Crear enlace mailto
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`[Web] ${subjectText}`)}&body=${encodeURIComponent(mailtoBody)}`
    
    // Abrir cliente de correo
    window.location.href = mailtoLink

    // Mostrar mensaje de éxito
    setShowSuccess(true)
    
    // Limpiar formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })

    // Ocultar mensaje después de 5 segundos
    setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <div>
      {showSuccess && (
        <div className="mb-6 flex items-center gap-3 p-4 bg-green-600/10 border border-green-600/30 rounded-xl">
          <Icon icon="mdi:check-circle" className="w-5 h-5 text-green-500 flex-shrink-0" />
          <p className="text-green-400 text-sm font-light">
            Se abrió tu cliente de correo. ¡Enviá el mensaje para completar!
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nombre y Email */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
              Nombre completo <span className="text-orange-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-500 font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all duration-200 ${
                errors.name ? 'border-red-500' : 'border-neutral-700 focus:border-orange-600'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-red-400 text-sm font-light">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
              Email <span className="text-orange-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-500 font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all duration-200 ${
                errors.email ? 'border-red-500' : 'border-neutral-700 focus:border-orange-600'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-red-400 text-sm font-light">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Teléfono y Asunto */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
              Teléfono <span className="text-neutral-500 font-light">(opcional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+595 9XX XXX XXX"
              className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 focus:border-orange-600 transition-all duration-200"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
              Asunto
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 focus:border-orange-600 transition-all duration-200 appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23737373'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
            >
              {subjects.map((subject) => (
                <option key={subject.value} value={subject.value} className="bg-neutral-800">
                  {subject.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
            Mensaje <span className="text-orange-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="¿En qué podemos ayudarte?"
            rows={5}
            className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-500 font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all duration-200 resize-none ${
              errors.message ? 'border-red-500' : 'border-neutral-700 focus:border-orange-600'
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-red-400 text-sm font-light">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300"
          >
            Enviar mensaje
            <Icon icon="mdi:send" className="w-5 h-5" />
          </button>
          
          <p className="text-neutral-500 text-sm font-light">
            <span className="text-orange-600">*</span> Campos obligatorios
          </p>
        </div>
      </form>
    </div>
  )
}