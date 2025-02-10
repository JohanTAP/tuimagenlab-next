import { Container } from "@/components/ui/container"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Scan, PenTool, Printer, Paintbrush } from "lucide-react"

const services = [
    {
        title: "Escaneamos",
        description: "Captura digital precisa de modelos y preparaciones dentales",
        icon: <Scan className="h-10 w-10" />,
    },
    {
        title: "Diseñamos",
        description: "Planificación digital detallada usando software especializado",
        icon: <PenTool className="h-10 w-10" />,
    },
    {
        title: "Fresamos o Imprimimos",
        description: "Fabricación con tecnología CAD/CAM de alta precisión",
        icon: <Printer className="h-10 w-10" />,
    },
    {
        title: "Maquillamos",
        description: "Acabado estético personalizado para resultados naturales",
        icon: <Paintbrush className="h-10 w-10" />,
    },
]

export function ServicesOverview ()
{
    return (
        <section className="py-20">
            <Container>
                <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    { services.map( ( service, index ) => (
                        <Card key={ index } className="text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <CardHeader>
                                <div className="flex justify-center mb-4">{ service.icon }</div>
                                <CardTitle className="mb-2">{ service.title }</CardTitle>
                                <p className="text-sm text-muted-foreground">{ service.description }</p>
                            </CardHeader>
                        </Card>
                    ) ) }
                </div>
            </Container>
        </section>
    )
}

