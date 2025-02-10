import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Store, Truck } from "lucide-react"

const deliveryOptions = [
    {
        title: "Entrega en tu Clínica",
        description: "Talca o Chillán",
        icon: <Building2 className="w-8 h-8" />,
    },
    {
        title: "Entrega en Centros",
        description: "Tu Imagen",
        icon: <Store className="w-8 h-8" />,
    },
    {
        title: "Despacho por Encomienda",
        description: "Envíos a todo Chile",
        icon: <Truck className="w-8 h-8" />,
    },
]

export function WorkflowDelivery ()
{
    return (
        <section className="py-20 bg-muted">
            <Container>
                <h2 className="text-3xl font-bold text-center mb-12">Opciones de Entrega</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    { deliveryOptions.map( ( option, index ) => (
                        <Card
                            key={ index }
                            className="text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-card"
                        >
                            <CardHeader>
                                <div className="flex justify-center mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110">
                                    { option.icon }
                                </div>
                                <CardTitle>{ option.title }</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{ option.description }</p>
                            </CardContent>
                        </Card>
                    ) ) }
                </div>
            </Container>
        </section>
    )
}
