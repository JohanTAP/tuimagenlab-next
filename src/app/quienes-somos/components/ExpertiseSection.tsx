import { Cpu, Printer, Clock } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Container } from "@/components/ui/container"

export function ExpertiseSection ()
{
    return (
        <section className="py-20 bg-muted">
            <Container>
                <h2 className="text-3xl font-bold mb-12 text-center">Nuestra Experiencia</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <ExpertiseCard
                        icon={ <Cpu className="w-12 h-12 text-primary" /> }
                        title="Tecnología Avanzada"
                        description="Utilizamos el escáner intraoral Primescan y otras tecnologías de vanguardia para garantizar la máxima precisión."
                    />
                    <ExpertiseCard
                        icon={ <Printer className="w-12 h-12 text-primary" /> }
                        title="Impresión 3D Especializada"
                        description="Nos hemos perfeccionado en la impresión 3D para aplicaciones dentales, ofreciendo soluciones personalizadas."
                    />
                    <ExpertiseCard
                        icon={ <Clock className="w-12 h-12 text-primary" /> }
                        title="Eficiencia y Rapidez"
                        description="Entregamos piezas únicas en el menor tiempo posible, permitiéndote ofrecer tratamientos más rápidos y exitosos."
                    />
                </div>
            </Container>
        </section>
    )
}

interface ExpertiseCardProps
{
    icon: React.ReactNode;
    title: string;
    description: string;
}

function ExpertiseCard ( { icon, title, description }: ExpertiseCardProps )
{
    return (
        <Card className="transition-transform hover:scale-105">
            <CardHeader>
                <div className="flex justify-center mb-4">{ icon }</div>
                <CardTitle className="text-xl text-center">{ title }</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground text-center">{ description }</p>
            </CardContent>
        </Card>
    )
}

