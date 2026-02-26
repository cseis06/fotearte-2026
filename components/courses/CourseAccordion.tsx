"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Icon } from '@iconify/react'
import gsap from 'gsap'

interface ClassContent {
  number: number
  title: string
  theme?: string
  topics: string[]
  concept?: string
}

interface CourseAccordionProps {
  classes: ClassContent[]
  courseId: string
}

export default function CourseAccordion({ classes, courseId }: CourseAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggleClass = (index: number) => {
    if (openIndex === index) {
      // Cerrar
      gsap.to(contentRefs.current[index], {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut"
      })
      setOpenIndex(null)
    } else {
      // Cerrar el anterior si hay uno abierto
      if (openIndex !== null && contentRefs.current[openIndex]) {
        gsap.to(contentRefs.current[openIndex], {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut"
        })
      }
      
      // Abrir el nuevo
      setOpenIndex(index)
      const content = contentRefs.current[index]
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {classes.map((classItem, index) => (
        <div 
          key={`${courseId}-class-${index}`}
          className="border border-neutral-800 rounded-xl overflow-hidden bg-neutral-900/30"
        >
          {/* Header - Clickable */}
          <button
            onClick={() => toggleClass(index)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-800/30 transition-colors duration-200"
          >
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-600/10 text-orange-600 text-sm font-semibold">
                {String(classItem.number).padStart(2, '0')}
              </span>
              <div>
                <h4 className="text-white font-semibold">{classItem.title}</h4>
                {classItem.theme && (
                  <p className="text-neutral-500 text-sm font-light">{classItem.theme}</p>
                )}
              </div>
            </div>
            
            <Icon 
              icon="mdi:chevron-down" 
              className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Content - Expandible */}
          <div 
            ref={(el) => { contentRefs.current[index] = el }}
            className="overflow-hidden"
            style={{ height: 0, opacity: 0 }}
          >
            <div className="px-5 pb-5 pt-2 border-t border-neutral-800">
              {/* Topics */}
              <ul className="space-y-2 mb-4">
                {classItem.topics.map((topic, topicIndex) => (
                  <li 
                    key={topicIndex}
                    className="flex items-start gap-3 text-neutral-300 font-light text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-1.5 flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>

              {/* Concept */}
              {classItem.concept && (
                <div className="mt-4 pt-4 border-t border-neutral-800">
                  <p className="text-orange-500 text-sm italic font-light">
                    &quot;{classItem.concept}&quot;
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}