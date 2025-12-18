"use client"

import { useState, useEffect } from "react"

export default function ExitPopup() {
  const [show, setShow] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const TYPEFORM_URL = "https://form.typeform.com/to/SEU_FORM_ID" // 👈 COLOQUE SEU ID

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (!hasShown && e.clientY < 50) {
        setShow(true)
        setHasShown(true)
      }
    }
    document.addEventListener('mouseout', handleMouseOut)
    return () => document.removeEventListener('mouseout', handleMouseOut)
  }, [hasShown])

  if (!show) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      style={{ backgroundColor: 'rgba(64, 49, 40, 0.95)' }}
    >
      <div 
        className="relative max-w-md w-full p-8 rounded-2xl shadow-2xl"
        style={{ backgroundColor: '#F4EFE6' }}
      >
        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-black hover:bg-opacity-10 transition-colors"
          style={{ color: '#403128' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center space-y-6">
          <div className="text-5xl">🚨</div>
          
          <h2 className="font-serif text-3xl font-bold" style={{ color: '#403128' }}>
            Espera!
          </h2>
          
          <p className="text-lg leading-relaxed" style={{ color: '#5F5944' }}>
            Você está a <strong>10 segundos</strong> de nunca mais esquecer o que lê.
          </p>
          
          <p className="text-base" style={{ color: 'rgba(95, 89, 68, 0.8)' }}>
            Não deixe mais um livro morrer na sua memória.
          </p>

          <a
            href={TYPEFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide transition-all hover:scale-105"
            style={{
              backgroundColor: '#BDBC9B',
              color: '#403128',
            }}
          >
            Garantir Minha Vaga Agora
          </a>

          <button
            onClick={() => setShow(false)}
            className="text-sm underline hover:no-underline"
            style={{ color: 'rgba(95, 89, 68, 0.6)' }}
          >
            Não, prefiro continuar esquecendo
          </button>
        </div>
      </div>
    </div>
  )
}