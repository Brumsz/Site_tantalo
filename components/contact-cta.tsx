"use client"

import { useEffect, useRef } from "react"
import { MessageCircle, Instagram } from "lucide-react"

export default function ContactCTA() {
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
      id="contact"
      ref={sectionRef}
      className="py-48 md:py-56 px-6 md:px-12"
      // Fundo Sólido #51594D para receber o degradê da seção anterior
      style={{
        backgroundColor: "#51594D",
      }}
    >
      <div className="max-w-5xl mx-auto text-center space-y-20">
        <div className="space-y-10">
          <h2
            className="fade-in-element font-serif text-[48px] md:text-[56px] leading-[1.15] text-balance font-semibold tracking-tight"
            style={{ color: "#D9D2B0" }}
          >
            Comece Sua Transformação Intelectual
          </h2>
          <p
            className="fade-in-element delay-200 font-sans text-[16px] leading-[1.8] tracking-wide text-pretty"
            style={{ color: "rgba(217, 210, 176, 0.85)" }}
          >
            Entre em contato para saber mais
          </p>
        </div>

        <div className="fade-in-element delay-400 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 h-14 px-8 rounded-lg font-sans text-[16px] font-semibold tracking-wider uppercase transition-all duration-300 w-full sm:w-auto"
            style={{
              backgroundColor: "#BDBC9B",
              color: "#403128",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#CCC9AA"
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)"
              e.currentTarget.style.transform = "translateY(-2px) scale(1.02)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#BDBC9B"
              e.currentTarget.style.boxShadow = "none"
              e.currentTarget.style.transform = "none"
            }}
          >
            <MessageCircle className="w-5 h-5" style={{ color: "#403128" }} />
            WhatsApp
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 h-14 px-8 rounded-lg font-sans text-[16px] font-semibold tracking-wider uppercase transition-all duration-300 w-full sm:w-auto"
            style={{
              backgroundColor: "#BDBC9B",
              color: "#403128",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#CCC9AA"
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)"
              e.currentTarget.style.transform = "translateY(-2px) scale(1.02)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#BDBC9B"
              e.currentTarget.style.boxShadow = "none"
              e.currentTarget.style.transform = "none"
            }}
          >
            <Instagram className="w-5 h-5" style={{ color: "#403128" }} />
            Instagram
          </a>
        </div>

        <footer
          className="fade-in-element delay-600 pt-24 font-sans text-[14px] leading-[1.8] tracking-wide"
          style={{ color: "rgba(217, 210, 176, 0.5)" }}
        >
          © 2025 Tântalo. Luxo Intelectual Acessível.
        </footer>
      </div>
    </section>
  )
}