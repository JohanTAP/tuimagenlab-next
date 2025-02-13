import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function DentalLabSection ()
{
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:items-center">

                    {/* Contenedor de la imagen con hover en pantallas grandes */ }
                    <div className="w-full max-w-[500px] mx-auto overflow-hidden">
                        <div className="relative w-full aspect-square group perspective-[1200px]">

                            {/* Contenedor rotatorio con hover solo en pantallas grandes */ }
                            <div className="relative w-full h-full transition-transform duration-700 preserve-3d md:group-hover:rotate-y-180">

                                {/* Imagen frontal */ }
                                <div className="absolute inset-0 w-full h-full backface-hidden">
                                    <Image
                                        src="/24.png"
                                        alt="Prótesis dentales sobre implantes"
                                        width={ 500 }
                                        height={ 500 }
                                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    />
                                </div>

                                {/* Imagen trasera */ }
                                <div className="absolute inset-0 w-full h-full rotate-y-180 backface-hidden">
                                    <Image
                                        src="/25.png"
                                        alt="Tecnología de Vanguardia"
                                        width={ 500 }
                                        height={ 500 }
                                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Contenido del card */ }
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">
                                Laboratorio Dental con Impresión 3D Avanzada
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                Impresión 3D y selección de materiales premium para prótesis dentales:
                            </p>
                            <ul className="space-y-2">
                                { [ "Entregas rápidas", "Alta precisión", "Calidad Superior" ].map( ( item, index ) => (
                                    <li key={ index } className="flex items-center space-x-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>{ item }</span>
                                    </li>
                                ) ) }
                            </ul>
                            <Button asChild className="w-full">
                                <Link href="/quienes-somos" target="_blank">
                                    Más información
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </section>
    );
}
