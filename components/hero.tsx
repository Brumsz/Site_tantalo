"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const TYPEFORM_URL = "https://form.typeform.com/to/KjHq9oF2"; // 👈 COLOQUE SEU ID AQUI

  useEffect(() => {
    const heroElements = heroRef.current?.querySelectorAll(".fade-in-element")
    heroElements?.forEach((el) => {
      el.classList.add("animate-in", "animation-complete")
    })
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-40 md:py-48"
      style={{
        background: `radial-gradient(circle at center, #51594D 0%, #3E453A 100%)`,
      }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-16 pt-24 md:pt-20 z-10">
        {/* Headline */}
        <h1
          className="fade-in-element font-serif text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] tracking-tight text-balance font-semibold"
          style={{ color: "#D9D2B0" }}
        >
          Você Lê. Mas Não Absorve.
        </h1>

        {/* Subheadline */}
        <p
          className="fade-in-element delay-200 font-sans text-[16px] md:text-[16px] max-w-2xl mx-auto leading-[1.8] tracking-wide text-pretty"
          style={{ color: "rgba(217, 210, 176, 0.85)" }}
        >
          A primeira plataforma de curadoria bibliográfica que transforma leitura em conhecimento permanente
        </p>

        {/* CTA INLINE - CONVERSÃO IMEDIATA */}
        <div className="fade-in-element delay-400 max-w-md mx-auto space-y-4">
          {/* Scarcity Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
               style={{ 
                 backgroundColor: 'rgba(189, 188, 155, 0.2)',
                 color: '#BDBC9B',
                 border: '1px solid rgba(189, 188, 155, 0.3)'
               }}>
            🔥 Apenas 50 vagas disponíveis
          </div>

          {/* CTA Button Principal */}
          <a
            href={TYPEFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 w-full px-8 py-5 rounded-xl font-sans text-lg font-bold tracking-wide uppercase transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundColor: '#BDBC9B',
              color: '#403128',
            }}
          >
            Quero Transformar Minha Leitura
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Disclaimer */}
          <p className="text-sm" style={{ color: 'rgba(217, 210, 176, 0.6)' }}>
            🔒 Sem spam. Apenas 2 minutos para preencher.
          </p>
        </div>

        {/* CTA Secundário */}
        <div className="fade-in-element delay-600 flex justify-center">
          <a
            href="#metodo"
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:bg-opacity-10"
            style={{
              color: '#D9D2B0',
              border: '2px solid rgba(217, 210, 176, 0.3)',
            }}
          >
            Entender Como Funciona
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, #5F5944 100%)`,
        }}
      />
    </section>
  )
}