import type { Metadata } from "next"
import { HeroSection } from "./components/HeroSection"
import { HistorySection } from "./components/HistorySection"
import { ExpertiseSection } from "./components/ExpertiseSection"
import { MissionSection } from "./components/MissionSection"
import { CtaSection } from "./components/CtaSection"

export const metadata: Metadata = {
    title: "Acerca de Tu Imagen Lab | Laboratorio Dental Digital",
    description:
        "Tu Imagen Lab es un laboratorio dental digital que ofrece soluciones innovadoras para tu clínica desde 2019.",
}

export default function AboutPage ()
{
    return (
        <main className="min-h-screen bg-background">
            <HeroSection />
            <HistorySection />
            <ExpertiseSection />
            <MissionSection />
            <CtaSection />
        </main>
    )
}
