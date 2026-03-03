"use client"

import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import emailjs from '@emailjs/browser'

// ============================================
// CONFIGURACIÓN DE EMAILJS
// ============================================
// Instrucciones:
// 1. Creá una cuenta en https://www.emailjs.com/
// 2. Agregá un "Email Service" (Gmail, Outlook, etc.)
// 3. Creá un "Email Template" con estas variables:
//    {{from_name}}, {{from_email}}, {{phone}}, {{subject}}, {{message}}
// 4. Reemplazá los valores abajo con tus IDs:

const EMAILJS_SERVICE_ID = 'service_b59e5p4'   // Tu Service ID
const EMAILJS_TEMPLATE_ID = 'template_hv57ob5' // Tu Template ID  
const EMAILJS_PUBLIC_KEY = 'kJt5zG7SwgWGRLxuk'    // Tu Public Key

// ============================================

interface FormData {
  from_name: string
  from_email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  from_name?: string
  from_email?: string
  message?: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

const subjects = [
  { value: '', label: 'Seleccioná un tema' },
  { value: 'Información sobre cursos', label: 'Información sobre cursos' },
  { value: 'Alquiler de equipos', label: 'Alquiler de equipos' },
  { value: 'Inscripción', label: 'Inscripción' },
  { value: 'Servicio corporativo', label: 'Servicio corporativo' },
  { value: 'Otro', label: 'Otro' },
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    from_email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.from_name.trim()) {
      newErrors.from_name = 'El nombre es requerido'
    }

    if (!formData.from_email.trim()) {
      newErrors.from_email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
      newErrors.from_email = 'Email inválido'
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
          from_name: formData.from_name,
          from_email: formData.from_email,
          phone: formData.phone || 'No proporcionado',
          subject: formData.subject || 'Consulta general',
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setFormData({ from_name: '', from_email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
    }
  }

  // Pantalla de éxito
  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-600/20 mx-auto mb-6">
          <Icon icon="mdi:check-circle" className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-3">¡Mensaje enviado!</h3>
        <p className="text-neutral-400 font-light mb-8 max-w-sm mx-auto">
          Gracias por contactarnos. Te responderemos a la brevedad.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-500 font-medium transition-colors"
        >
          <Icon icon="mdi:plus" className="w-5 h-5" />
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Mensaje de error */}
      {status === 'error' && (
        <div className="flex items-start gap-3 p-4 bg-red-600/10 border border-red-600/30 rounded-xl">
          <Icon icon="mdi:alert-circle" className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-400 text-sm font-medium">Error al enviar el mensaje</p>
            <p className="text-red-400/70 text-sm font-light mt-1">
              Intentá de nuevo o contactanos por{' '}
              <a href="https://wa.me/595973497799" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-300">WhatsApp</a>
            </p>
          </div>
        </div>
      )}

      {/* Nombre y Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="from_name" className="block text-white text-sm font-medium mb-2">
            Nombre completo <span className="text-orange-600">*</span>
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Tu nombre"
            disabled={status === 'sending'}
            className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-500 font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all duration-200 disabled:opacity-50 ${
              errors.from_name ? 'border-red-500' : 'border-neutral-700 focus:border-orange-600'
            }`}
          />
          {errors.from_name && (
            <p className="mt-1.5 text-red-400 text-sm font-light flex items-center gap-1">
              <Icon icon="mdi:alert-circle" className="w-4 h-4" />{errors.from_name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="from_email" className="block text-white text-sm font-medium mb-2">
            Email <span className="text-orange-600">*</span>
          </label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            placeholder="tu@email.com"
            disabled={status === 'sending'}
            className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-500 font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all duration-200 disabled:opacity-50 ${
              errors.from_email ? 'border-red-500' : 'border-neutral-700 focus:border-orange-600'
            }`}
          />
          {errors.from_email && (
            <p className="mt-1.5 text-red-400 text-sm font-light flex items-center gap-1">
              <Icon icon="mdi:alert-circle" className="w-4 h-4" />{errors.from_email}
            </p>
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
            disabled={status === 'sending'}
            className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 focus:border-orange-600 transition-all duration-200 disabled:opacity-50"
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
            disabled={status === 'sending'}
            className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 focus:border-orange-600 transition-all duration-200 appearance-none cursor-pointer disabled:opacity-50"
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
          disabled={status === 'sending'}
          className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-500 font-light focus:outline-none focus:ring-2 focus:ring-orange-600/50 transition-all duration-200 resize-none disabled:opacity-50 ${
            errors.message ? 'border-red-500' : 'border-neutral-700 focus:border-orange-600'
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-red-400 text-sm font-light flex items-center gap-1">
            <Icon icon="mdi:alert-circle" className="w-4 h-4" />{errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
        >
          {status === 'sending' ? (
            <>
              <Icon icon="mdi:loading" className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Enviar mensaje
              <Icon icon="mdi:send" className="w-5 h-5" />
            </>
          )}
        </button>
        
        <p className="text-neutral-500 text-sm font-light">
          <span className="text-orange-600">*</span> Campos obligatorios
        </p>
      </div>
    </form>
  )
}