"use client"

import { useState, useEffect } from "react"

export default function FloatingCTA() {
  const [show, setShow] = useState(false)
  const TYPEFORM_URL = "https://form.typeform.com/to/KjHq9oF2" // 👈 COLOQUE SEU ID

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!show) return null

  return (
    <a
      href={TYPEFORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105 animate-slide-up"
      style={{
        backgroundColor: '#BDBC9B',
        color: '#403128',
      }}
    >
      <span className="hidden sm:inline">Entrar na Lista</span>
      <span className="sm:hidden">Garantir Vaga</span>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  )
}