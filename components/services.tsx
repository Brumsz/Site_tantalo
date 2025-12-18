"use client"

import { useEffect, useRef } from "react"
import { Check } from "lucide-react"

export default function Services() {
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

  const tiers = [
    {
      name: "Essencial",
      featured: false,
      delay: "delay-200",
      features: [
        "Curadoria personalizada 1:1",
        "Metodologia Zettelkasten completa",
        "1 livro a cada 45 dias",
        "App com marcador de progresso",
        "Newsletter mensal",
      ],
    },
    {
      name: "Integral",
      featured: true,
      delay: "delay-400",
      features: [
        "Tudo do Essencial",
        "Comunidade exclusiva",
        "Eventos mensais com autores",
        "Marcador digital NFC físico",
        "Sessão síntese trimestral",
      ],
    },
    {
      name: "Absoluta",
      featured: false,
      delay: "delay-600",
      badge: "50 vagas",
      features: [
        "Tudo do Integral",
        "Q&A exclusivo com autores",
        "Biblioteca física curada",
        "Relatório evolução intelectual",
        "Eventos presenciais",
      ],
    },
  ]

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-40 md:py-52 px-6 md:px-12"
      style={{
        background: `radial-gradient(circle at center, #5F5944 0%, #564f3d 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="fade-in-element font-serif text-[48px] md:text-[56px] text-center mb-24 leading-[1.15] text-balance font-semibold tracking-tight"
          style={{ color: "#D9D2B0" }}
        >
          Como Funciona
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`fade-in-element ${tier.delay} relative rounded-2xl p-12 transition-all duration-[800ms] ease-out hover:-translate-y-1 ${
                tier.featured ? "md:scale-105" : ""
              }`}
              style={{
                backgroundColor: "#5F5944",
                border: tier.featured ? "2px solid #BDBC9B" : "1px solid rgba(217, 210, 176, 0.2)",
                boxShadow: "0 0 0 0 rgba(0,0,0,0)",
              }}
              onMouseEnter={(e) => {
                if (!tier.featured) {
                  e.currentTarget.style.borderColor = "rgba(217, 210, 176, 0.4)"
                }
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)"
              }}
              onMouseLeave={(e) => {
                if (!tier.featured) {
                  e.currentTarget.style.borderColor = "rgba(217, 210, 176, 0.2)"
                }
                e.currentTarget.style.boxShadow = "0 0 0 0 rgba(0,0,0,0)"
              }}
            >
              {tier.featured && (
                <div
                  className="absolute -top-4 right-8 px-5 py-2 rounded-full text-sm font-sans font-semibold"
                  style={{
                    backgroundColor: "#BDBC9B",
                    color: "#403128",
                  }}
                >
                  MAIS POPULAR
                </div>
              )}
              {tier.badge && !tier.featured && (
                <div
                  className="absolute -top-4 right-8 px-5 py-2 rounded-full text-sm font-sans font-semibold"
                  style={{
                    backgroundColor: "#BDBC9B",
                    color: "#403128",
                  }}
                >
                  {tier.badge}
                </div>
              )}
              <div className="mb-12">
                <h3 className="font-serif text-[32px] mb-4 font-semibold" style={{ color: "#D9D2B0" }}>
                  {tier.name}
                </h3>
              </div>
              <ul className="space-y-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#BDBC9B" }} />
                    <span
                      className="font-sans text-[16px] leading-[1.8] tracking-wide"
                      style={{ color: "rgba(217, 210, 176, 0.85)" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* 👇 NOVO: CTA Final Services */}
        <div className="fade-in-element delay-800 text-center mt-16">
          <a
            href="https://form.typeform.com/to/KjHq9oF2" // 👈 SUBSTITUA
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-sans font-bold text-lg uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: '#BDBC9B', color: '#403128' }}
          >
            Fechar Minha Vaga
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      {/* O DIV DE DEGRADE FOI REMOVIDO DAQUI */}
    </section>
  )
}