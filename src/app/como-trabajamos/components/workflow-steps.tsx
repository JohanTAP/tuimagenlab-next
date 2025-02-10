import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scan, LayoutDashboardIcon as LayoutPlanboard, PrinterIcon as Printer3d } from "lucide-react"

const steps = [
    {
        title: "Entrada de Casos",
        description: "Múltiples opciones para comenzar tu caso:",
        options: [
            "Escaneo en Centros Tu Imagen",
            "Llevamos el escáner a tu consulta",
            "Nos envías tu archivo STL o PLY si ya cuentas con escáner",
            "Nos envías tu modelo en yeso",
        ],
        icon: <Scan className="w-10 h-10 text-primary" />,
    },
    {
        title: "Diseño y Planificación",
        description: "Centro especializado usando tecnología de punta:",
        options: [
            "Recepción de casos para diseño o planificación",
            "Uso de software Exocad - Inlab - Blue Sky Bio",
            "Envío de fotos o archivos HTML para aprobación",
        ],
        icon: <LayoutPlanboard className="w-10 h-10 text-primary" />,
    },
    {
        title: "Producción",
        description: "Fabricación precisa de tu caso:",
        options: [ "Fase de Fresado o Impresión 3D", "Maquillaje y/o terminación", "Control de calidad" ],
        icon: <Printer3d className="w-10 h-10 text-primary" />,
    },
]

export function WorkflowSteps ()
{
    return (
        <section className="py-20">
            <Container>
                <div className="grid gap-8 md:grid-cols-3">
                    { steps.map( ( step, index ) => (
                        <Card
                            key={ index }
                            className="relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-primary/5"
                        >
                            <CardHeader>
                                <div className="mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110">
                                    { step.icon }
                                </div>
                                <CardTitle className="text-xl">{ step.title }</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">{ step.description }</p>
                                <ul className="space-y-2">
                                    { step.options.map( ( option, optionIndex ) => (
                                        <li key={ optionIndex } className="flex items-start gap-2 text-sm">
                                            <span className="rounded-full w-1.5 h-1.5 bg-primary mt-2" />
                                            { option }
                                        </li>
                                    ) ) }
                                </ul>
                            </CardContent>
                        </Card>
                    ) ) }
                </div>
            </Container>
        </section>
    )
}

