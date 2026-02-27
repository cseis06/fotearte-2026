"use client"

import React, { useState, useRef } from 'react'
import { Icon } from '@iconify/react'
import gsap from 'gsap'

interface FAQ {
  question: string
  answer: string
}

interface FAQSection {
  id: string
  title: string
  icon: string
  faqs: FAQ[]
}

interface FAQAccordionProps {
  sections: FAQSection[]
}

export default function FAQAccordion({ sections }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({})
  const contentRefs = useRef<Record<string, (HTMLDivElement | null)[]>>({})

  const toggleFAQ = (sectionId: string, index: number) => {
    const currentOpen = openItems[sectionId]
    const contentArray = contentRefs.current[sectionId] || []

    if (currentOpen === index) {
      // Cerrar
      gsap.to(contentArray[index], {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut"
      })
      setOpenItems({ ...openItems, [sectionId]: null })
    } else {
      // Cerrar el anterior si hay uno abierto
      if (currentOpen !== null && currentOpen !== undefined && contentArray[currentOpen]) {
        gsap.to(contentArray[currentOpen], {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut"
        })
      }

      // Abrir el nuevo
      setOpenItems({ ...openItems, [sectionId]: index })
      const content = contentArray[index]
      if (content) {
        gsap.set(content, { height: "auto", opacity: 1 })
        const height = content.offsetHeight
        gsap.fromTo(content,
          { height: 0, opacity: 0 },
          { height, opacity: 1, duration: 0.3, ease: "power2.inOut" }
        )
      }
    }
  }

  const initRefs = (sectionId: string, index: number, el: HTMLDivElement | null) => {
    if (!contentRefs.current[sectionId]) {
      contentRefs.current[sectionId] = []
    }
    contentRefs.current[sectionId][index] = el
  }

  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <div key={section.id} id={section.id} className="scroll-mt-24">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-600/10">
              <Icon icon={section.icon} className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
          </div>

          {/* FAQs */}
          <div className="space-y-3">
            {section.faqs.map((faq, index) => (
              <div
                key={`${section.id}-${index}`}
                className="border border-neutral-800 rounded-xl overflow-hidden bg-neutral-900/30 hover:border-neutral-700 transition-colors duration-200"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(section.id, index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${
                    openItems[section.id] === index ? 'bg-orange-600' : 'bg-neutral-800'
                  }`}>
                    <Icon
                      icon={openItems[section.id] === index ? "mdi:minus" : "mdi:plus"}
                      className="w-4 h-4 text-white"
                    />
                  </div>
                </button>

                {/* Answer */}
                <div
                  ref={(el) => initRefs(section.id, index, el)}
                  className="overflow-hidden"
                  style={{ height: 0, opacity: 0 }}
                >
                  <div className="px-5 pb-5 pt-0">
                    <div className="h-px bg-neutral-800 mb-4" />
                    <p className="text-neutral-400 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}