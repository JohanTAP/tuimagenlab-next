import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import Link from "next/link"

export function CtaSection ()
{
    return (
        <section className="py-20 bg-background">
            <Container className="text-center">
                <h2 className="text-3xl font-bold mb-4">¿Listo para llevar tu clínica al siguiente nivel?</h2>
                <p className="text-xl mb-8 text-muted-foreground">
                    Descubre cómo Tu Imagen Lab puede transformar tu práctica dental.
                </p>
                <Link href="/contacto" passHref>
                    <Button size="lg">
                        Contáctanos Hoy
                    </Button>
                </Link>
            </Container>
        </section>
    )
}
