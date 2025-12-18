"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Network, Users } from "lucide-react"

export default function Solution() {
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
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: GraduationCap,
      title: "Curadoria PhD-Level",
      description: "Curadoria bibliográfica realizada por especialistas com doutorado e psicólogos",
      delay: "delay-200",
    },
    {
      icon: Network,
      title: "Método Zettelkasten",
      description: "Metodologia comprovada que transforma leitura passiva em construção ativa de conhecimento",
      delay: "delay-400",
    },
    {
      icon: Users,
      title: "Comunidade Intelectual",
      description: "Conecte-se com leitores sérios, não consumidores passivos",
      delay: "delay-600",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-40 md:py-52 px-6 md:px-12"
      style={{
        // CORREÇÃO CRÍTICA:
        // Começa em #51594D (igual ao fim do Problem) para sumir com a linha.
        // Fica um pouco mais escuro no meio para dar profundidade, mas mantém o tom verde.
        background: `linear-gradient(to bottom, #51594D 0%, #464d42 100%)`,
      }}
    >
      <div className="max-w-6xl mx-auto z-10 relative">
        <h2
          className="fade-in-element font-serif text-[48px] md:text-[56px] text-center mb-24 leading-[1.15] text-balance font-semibold tracking-tight"
          style={{ color: "#D9D2B0" }}
        >
          A Solução
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`fade-in-element ${feature.delay} rounded-2xl p-12 transition-all duration-[800ms] ease-out hover:-translate-y-1`}
              style={{
                // Cards em Marrom Oliva para contrastar com o fundo Verde
                backgroundColor: "#5F5944",
                border: "1px solid rgba(217, 210, 176, 0.15)",
                boxShadow: "0 0 0 0 rgba(0,0,0,0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(217, 210, 176, 0.4)"
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(217, 210, 176, 0.15)"
                e.currentTarget.style.boxShadow = "0 0 0 0 rgba(0,0,0,0)"
              }}
            >
              <feature.icon className="w-12 h-12 mb-8" style={{ color: "#BDBC9B" }} />
              <h3 className="font-serif text-[28px] mb-6 font-semibold" style={{ color: "#D9D2B0" }}>
                {feature.title}
              </h3>
              <p
                className="font-sans text-[16px] leading-[1.8] tracking-wide"
                style={{ color: "rgba(217, 210, 176, 0.85)" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL DA PÁGINA:
         Prepara para o CONTACT. Como o Contact é verde sólido (#51594D),
         aqui nós terminamos exatamente nessa cor.
      */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, #51594D 100%)`,
        }}
      />
    </section>
  )
}
