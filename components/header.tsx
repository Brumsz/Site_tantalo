"use client"

export default function Header() {
  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="container mx-auto px-6 md:px-12 py-6 md:py-4 relative">
        
        {/* ALTERAÇÃO DE ESTRUTURA: 
           1. 'h-auto': Altura automática no mobile para caber os dois um embaixo do outro.
           2. 'md:h-[200px]': Altura fixa apenas no computador.
           3. 'flex-col': Coluna vertical no mobile.
           4. 'md:flex-row': Linha horizontal no computador.
        */}
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[200px]">
          
          {/* 1. LOGO */}
          {/* Adicionei 'mb-4' no mobile para dar espaço entre logo e texto */}
          <div className="flex-shrink-0 z-10 mb-4 md:mb-0">
            <a href="#hero" className="block transition-transform duration-500 ease-out hover:scale-105">
              <img
                src="/images/fulllogo-transparent-20-281-29.png"
                alt="Tântalo Logo"
                // Reduzi um pouco a altura no mobile (h-[100px]) para não ocupar a tela toda
                className="h-[100px] md:h-[200px] w-auto object-contain"
              />
            </a>
          </div>

          {/* 2. NOME DA EMPRESA */}
          {/* MÁGICA DO CSS AQUI:
             - Mobile (padrão): 'relative', 'transform-none'. Fica estático embaixo do logo.
             - Desktop (md:): 'absolute', 'left-1/2', etc. Volta para o centro absoluto.
          */}
          <div className="relative md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-0">
            <h1 
              className="font-serif text-4xl md:text-6xl text-[#D9D2B0] tracking-[0.2em] uppercase font-bold whitespace-nowrap drop-shadow-sm"
            >
              Tântalo
            </h1>
          </div>

          {/* 3. MENU DE NAVEGAÇÃO (Direita - Apenas Desktop) */}
          <div className="hidden md:flex items-center gap-8 z-10">
            <a
              href="#services"
              className="font-sans text-[14px] tracking-wider uppercase transition-colors duration-300"
              style={{ color: "#D9D2B0" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#F2EFE9" 
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#D9D2B0"
              }}
            >
              Serviços
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-lg font-sans text-[14px] font-semibold tracking-wider uppercase transition-all duration-300"
              style={{
                backgroundColor: "#BDBC9B",
                color: "#403128",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#CCC9AA"
                e.currentTarget.style.transform = "translateY(-1px)"
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#BDBC9B"
                e.currentTarget.style.transform = "none"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              Contato
            </a>
          </div>
          
        </div>
      </div>
    </header>
  )
}