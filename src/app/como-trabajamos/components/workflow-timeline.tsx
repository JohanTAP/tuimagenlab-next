import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Package } from "lucide-react"

export function WorkflowTimeline ()
{
    return (
        <section className="py-20">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <Card className="bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                        <CardContent className="pt-6">
                            <div className="text-center space-y-6">
                                <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                                    <Clock className="w-6 h-6" />
                                    TIEMPO TU IMAGEN LAB
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-lg">Entrega en 5 días hábiles máximo desde la aprobación del caso</p>
                                    <div className="flex items-center justify-center gap-2 text-lg">
                                        <Package className="w-6 h-6" />
                                        Todos los casos se entregan con modelo 3D impreso
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </section>
    )
}

