"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Problem() {
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

  return (
    <section
      ref={sectionRef}
      className="relative py-40 md:py-52 px-6 md:px-12"
      style={{
        // Mantém a conexão perfeita com o Hero (que termina em #5F5944)
        background: `linear-gradient(to bottom, #5F5944 0%, #4e4938 100%)`,
      }}
    >
      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="grid md:grid-cols-2 gap-20 md:gap-24 items-center">
          <div className="space-y-10">
            <h2
              className="fade-in-element font-serif text-[48px] md:text-[56px] leading-[1.15] text-balance font-semibold tracking-tight"
              style={{ color: "#D9D2B0" }}
            >
              O Suplício de Tântalo
            </h2>
            <p
              className="fade-in-element delay-200 font-sans text-[16px] leading-[1.8] tracking-wide text-pretty"
              style={{ color: "rgba(217, 210, 176, 0.85)" }}
            >
              Na mitologia grega, Tântalo foi condenado à sede eterna com água ao alcance que sempre fugia. Essa é a
              metáfora perfeita: você lê, mas o conhecimento nunca é realmente absorvido. Livros acumulam, ideias
              evaporam, e a transformação intelectual nunca acontece.
            </p>
          </div>
          <div className="fade-in-element delay-400">
            <div
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: "rgba(64, 49, 40, 0.3)" }}
            >
              <Image
                src="/stack-of-books-with-ethereal-mist.jpg"
                alt="Representação visual de livros e conhecimento"
                fill
                className="object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>

      {/* A MÁGICA DE SAÍDA:
        Este overlay força o final da página a ser #51594D.
        Isso conecta invisivelmente com o início da próxima seção (Solution).
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