import Header from "@/components/header"
import Hero from "@/components/hero"
import Problem from "@/components/problem"
import Solution from "@/components/solution"
import Services from "@/components/services"
import TargetAudience from "@/components/target-audience"
import FutureExpansion from "@/components/future-expansion"
import ContactCTA from "@/components/contact-cta"

export default function Home() {
  return (
    <>
      <Header />
      <main className="scroll-smooth">
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <TargetAudience />
        <FutureExpansion />
        <ContactCTA />
      </main>
    </>
  )
}
