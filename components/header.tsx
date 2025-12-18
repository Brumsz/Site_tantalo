"use client"

export default function Header() {
  const TYPEFORM_URL = "https://form.typeform.com/to/KjHq9oF2"; // 👈 COLOQUE SEU ID AQUI

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: 'rgba(81, 89, 77, 0.95)' }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <img
              src="/images/fulllogo-transparent-20-281-29.png"
              alt="Tântalo"
              className="h-12 w-auto object-contain"
            />
            <span className="font-serif text-2xl font-bold tracking-wider" 
                  style={{ color: '#D9D2B0' }}>
              TÂNTALO
            </span>
          </a>

          {/* CTA HEADER - SEMPRE VISÍVEL */}
          <a
            href={TYPEFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-lg font-sans text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: '#BDBC9B',
              color: '#403128',
            }}
          >
            Garantir Vaga
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Mobile CTA */}
          <a
            href={TYPEFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden px-4 py-2 rounded-lg text-sm font-semibold"
            style={{
              backgroundColor: '#BDBC9B',
              color: '#403128',
            }}
          >
            Entrar
          </a>
        </div>
      </div>
    </header>
  );
}