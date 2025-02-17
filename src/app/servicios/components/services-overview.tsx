import { Container } from "@/components/ui/container"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Scan, PenTool, Printer, Paintbrush, CheckCircle } from "lucide-react"

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

const detailedServices = [
    "Escaneo intraoral",
    "Escaneo de modelos",
    "Carillas en feldespato, disilicato, zirconio, resina 3D impresa",
    "Coronas en feldespato, disilicato, zirconio, resina 3D impresa",
    "Inlay, Onlay, Overlay en feldespato, disilicato, Zirconio, resina 3D impresa",
    "Arco parcial o completo en disilicato, resina 3D impresa o zirconio",
    "Planos o férula de alivio oclusal",
    "Guías Quirúrgicas para implantes o mini tornillos de ortodoncia",
    "Diseños de sonrisa",
    "Impresión 3D de modelos",
]

export function ServicesOverview ()
{
    return (
        <section className="py-20">
            <Container>
                <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
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

                <h3 className="text-2xl font-bold text-center mb-8">Más destalles de nuestras prestaciones</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    { detailedServices.map( ( service, index ) => (
                        <div key={ index } className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{ service }</span>
                        </div>
                    ) ) }
                </div>
            </Container>
        </section>
    )
}
