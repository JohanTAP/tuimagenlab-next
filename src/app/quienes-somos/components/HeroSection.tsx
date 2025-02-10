import Image from "next/image"
import { Container } from "@/components/ui/container"

export function HeroSection ()
{
    return (
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
            <Image
                src="/images/dental-lab.jpg"
                alt="Tu Imagen Lab - Laboratorio Dental"
                layout="fill"
                objectFit="cover"
                className="absolute z-0"
                priority
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <Container className="relative z-20 text-center text-white">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-up">Tu Imagen Lab</h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
                    Soluciones innovadoras para tu clínica dental desde 2019
                </p>
            </Container>
        </section>
    )
}
