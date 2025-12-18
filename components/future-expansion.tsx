"use client"

import { useEffect, useRef } from "react"

export default function FutureExpansion() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "animation-complete")
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-element")
    elements?.forEach((el: Element) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-40 md:py-52 px-6 md:px-12"
      style={{
        // Mantivemos o radial para dar profundidade, mas ele combina com o tema
        background: `radial-gradient(circle at center, #5F5944 0%, #564f3d 100%)`,
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="fade-in-element font-serif text-[40px] md:text-[48px] text-center mb-20 leading-[1.15] text-balance font-semibold tracking-tight"
          style={{ color: "#D9D2B0" }}
        >
          Expansão Futura
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div
            className="fade-in-element delay-200 rounded-xl p-12 transition-all duration-[800ms] ease-out hover:-translate-y-1"
            style={{
              backgroundColor: "rgba(64, 49, 40, 0.6)",
              border: "1px solid rgba(217, 210, 176, 0.2)",
              boxShadow: "0 0 0 0 rgba(0,0,0,0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(217, 210, 176, 0.4)"
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(217, 210, 176, 0.2)"
              e.currentTarget.style.boxShadow = "0 0 0 0 rgba(0,0,0,0)"
            }}
          >
            <h3 className="font-serif text-[28px] mb-6 font-semibold" style={{ color: "#D9D2B0" }}>
              B2C Famílias
            </h3>
            <p
              className="font-sans text-[16px] leading-[1.8] tracking-wide"
              style={{ color: "rgba(217, 210, 176, 0.85)" }}
            >
              Zettelkasten gamificado para crianças 8-18 anos (neurodiversidade: autismo, dislexia, TDAH, superdotação)
            </p>
          </div>
          <div
            className="fade-in-element delay-400 rounded-xl p-12 transition-all duration-[800ms] ease-out hover:-translate-y-1"
            style={{
              backgroundColor: "rgba(64, 49, 40, 0.6)",
              border: "1px solid rgba(217, 210, 176, 0.2)",
              boxShadow: "0 0 0 0 rgba(0,0,0,0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(217, 210, 176, 0.4)"
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(217, 210, 176, 0.2)"
              e.currentTarget.style.boxShadow = "0 0 0 0 rgba(0,0,0,0)"
            }}
          >
            <h3 className="font-serif text-[28px] mb-6 font-semibold" style={{ color: "#D9D2B0" }}>
              B2B/Institucional
            </h3>
            <p
              className="font-sans text-[16px] leading-[1.8] tracking-wide"
              style={{ color: "rgba(217, 210, 176, 0.85)" }}
            >
              Licenças para escolas, universidades, empresas
            </p>
          </div>
        </div>
      </div>

      {/* A MÁGICA DA CONEXÃO:
          Este degradê força o final da página a terminar em #51594D.
          Isso cria a ponte invisível para a próxima seção (ContactCTA).
      */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 md:h-80 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, transparent 40%, #51594D 100%)`,
        }}
      />
    </section>
  )
}