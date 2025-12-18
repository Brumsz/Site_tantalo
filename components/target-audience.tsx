"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function TargetAudience() {
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

    const handleScroll = () => {
      const parallaxBg = sectionRef.current?.querySelector(".parallax-bg") as HTMLElement | null
      if (parallaxBg) {
        const scrolled = window.scrollY
        const sectionTop = sectionRef.current?.offsetTop || 0
        const offset = (scrolled - sectionTop) * 0.3
        parallaxBg.style.setProperty("--parallax-offset", `${offset}px`)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-40 md:py-52 px-6 md:px-12 overflow-hidden"
      style={{
        // AJUSTE DE CONEXÃO:
        // Começa em #5F5944 (Fim de Serviços)
        // Termina em #51594D (Início de Contato)
        // Assim não fica nenhuma linha visível nem em cima nem embaixo.
        background: `linear-gradient(to bottom, #5F5944 0%, #51594D 100%)`,
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/sophisticated-library-with-warm-lighting.jpg"
          alt="Background"
          fill
          className="object-cover parallax-bg"
        />
      </div>
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 md:gap-24 items-center">
          <div className="fade-in-element">
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(217, 210, 176, 0.2)" }}
            >
              <Image
                src="/professional-reading-in-elegant-environment.jpg"
                alt="Público-alvo Tântalo"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-10">
            <h2
              className="fade-in-element delay-200 font-serif text-[48px] md:text-[56px] leading-[1.15] text-balance font-semibold tracking-tight"
              style={{ color: "#D9D2B0" }}
            >
              Não É Para Todo Mundo
            </h2>
            <p
              className="fade-in-element delay-400 font-sans text-[16px] leading-[1.8] tracking-wide text-pretty"
              style={{ color: "rgba(217, 210, 176, 0.85)" }}
            >
              Tântalo exige humildade para admitir que você lê errado, disciplina para anotar diariamente, e paciência
              para transformação real. Não vendemos hacks de 7 dias. Vendemos metodologia comprovada para quem leva
              conhecimento a sério.
            </p>
            <div className="fade-in-element delay-600 pt-8" style={{ borderTop: "1px solid rgba(217, 210, 176, 0.2)" }}>
              <p
                className="font-sans text-[16px] italic leading-[1.8] tracking-wide"
                style={{ color: "rgba(217, 210, 176, 0.8)" }}
              >
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* O DIV DE DEGRADE FOI REMOVIDO DAQUI */}
    </section>
  )
}
