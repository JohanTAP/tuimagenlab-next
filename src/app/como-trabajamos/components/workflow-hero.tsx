import { Container } from "@/components/ui/container"

export function WorkflowHero ()
{
    return (
        <section className="py-20 bg-primary/5">
            <Container>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">¿Cómo Trabajamos?</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Conoce nuestro proceso paso a paso, desde el escaneo inicial hasta la entrega de tu producto final.
                    </p>
                </div>
            </Container>
        </section>
    )
}

