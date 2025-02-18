import { Container } from "@/components/ui/container"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Scan, PenTool, Printer, Paintbrush } from "lucide-react"
import Image from "next/image"

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
    {
        title: "Escaneo intraoral",
        image: "/placeholder.svg",
    },
    {
        title: "Escaneo de modelos",
        image: "/placeholder.svg",
    },
    {
        title: "Carillas en feldespato, disilicato, zirconio, resina 3D impresa",
        image: "/carillas.png",
    },
    {
        title: "Coronas en feldespato, disilicato, zirconio, resina 3D impresa",
        image: "/coronas.png",
    },
    {
        title: "Inlay, Onlay, Overlay en feldespato, disilicato, Zirconio, resina 3D impresa",
        image: "/30.png",
    },
    {
        title: "Arco parcial o completo en disilicato, resina 3D impresa o zirconio",
        image: "/placeholder.svg",
    },
    {
        title: "Planos o férula de alivio oclusal",
        image: "/placeholder.svg",
    },
    {
        title: "Guías Quirúrgicas para implantes o mini tornillos de ortodoncia",
        image: "/guiaquirurgica.png",
    },
    {
        title: "Diseños de sonrisa",
        image: "/placeholder.svg",
    },
    {
        title: "Impresión 3D de modelos",
        image: "/placeholder.svg",
    },
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

                <h3 className="text-2xl font-bold text-center mb-8">Más detalles de nuestras prestaciones</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    { detailedServices.map( ( service, index ) => (
                        <Card key={ index } className="flex flex-row h-32 transition-all duration-300 hover:shadow-lg">
                            {/* Imagen con tamaño igual al contenido */ }
                            <div className="w-1/2 h-full relative">
                                <Image
                                    src={ service.image }
                                    alt={ service.title }
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-l-lg"
                                />
                            </div>
                            {/* Contenido con tamaño igual a la imagen */ }
                            <CardHeader className="w-1/2 flex items-center justify-center p-4">
                                <CardTitle className="text-center text-sm">{ service.title }</CardTitle>
                            </CardHeader>
                        </Card>
                    ) ) }
                </div>
            </Container>
        </section>
    )
}
