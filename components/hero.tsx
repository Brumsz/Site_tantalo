"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

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
        // Fundo principal: Verde Musgo Radial
        background: `radial-gradient(circle at center, #51594D 0%, #3E453A 100%)`,
      }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-16 pt-24 md:pt-20 z-10">
        <h1
          className="fade-in-element font-serif text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] tracking-tight text-balance font-semibold"
          style={{ color: "#D9D2B0" }}
        >
          Você Lê. Mas Não Absorve.
        </h1>
        <p
          className="fade-in-element delay-200 font-sans text-[16px] md:text-[16px] max-w-2xl mx-auto leading-[1.8] tracking-wide text-pretty"
          style={{ color: "rgba(217, 210, 176, 0.85)" }}
        >
          A primeira plataforma de curadoria bibliográfica que transforma leitura em conhecimento permanente
        </p>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 fade-in-element delay-600 z-10">
        <ChevronDown className="w-8 h-8 animate-bounce" style={{ color: "#BDBC9B" }} />
      </div>

      {/* A MÁGICA DA TRANSIÇÃO:
          Este degradê força o final da tela a ficar 100% da cor #5F5944.
          Isso cria a "cola" invisível para a próxima seção.
      */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, #5F5944 100%)`,
        }}
      />
    </section>
  )
}