"use client"

import React, { useState, useEffect } from "react"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowDown, ArrowLeft } from "lucide-react"

// Orden personalizado del flujo
const workflowSteps = [
    { number: 1, text: "Escaneo en Centros Tu Imagen" },
    { number: 2, text: "Llevamos el escáner a tu consulta" },
    { number: 3, text: "Nos envías tu archivo STL o PLY si ya cuentas con escáner" },
    { number: 6, text: "Nos envías tu modelo en yeso" },
    { number: 5, text: "Envío de fotos o archivos HTML para aprobación" },
    { number: 4, text: "Recepción de casos para diseño o planificación" },
    { number: 7, text: "Fase de Fresado o Impresión 3D" },
    { number: 8, text: "Maquillaje y/o terminación" },
    { number: 9, text: "Despacho" },
]

export function WorkflowDiagram ()
{
    const [ isMobile, setIsMobile ] = useState( false )

    useEffect( () =>
    {
        const checkScreen = () =>
        {
            setIsMobile( window.innerWidth < 768 )
        }
        checkScreen()
        window.addEventListener( "resize", checkScreen )
        return () =>
        {
            window.removeEventListener( "resize", checkScreen )
        }
    }, [] )

    return (
        <section className="pb-20">
            <Container>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-3 md:grid-rows-3">
                    { workflowSteps.map( ( step, index ) =>
                    {
                        const col = index % 3

                        return (
                            <Card
                                key={ index }
                                className={ `relative flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg ${ isMobile ? 'h-24' : '' }` }
                            >
                                <CardContent className="flex items-center p-4">
                                    <span className="text-2xl font-bold mr-4">{ step.number }</span>
                                    <p>{ step.text }</p>

                                    { index < workflowSteps.length - 1 && (
                                        <>
                                            { isMobile ? (
                                                <ArrowDown
                                                    className="absolute z-10 -bottom-6 left-1/2 transform -translate-x-1/2 text-muted-foreground"
                                                />
                                            ) : (
                                                step.number === 4 || step.number === 5 ? (
                                                    <ArrowLeft
                                                        className="absolute z-10 -left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                                                    />
                                                ) : step.number === 6 ? (
                                                    <ArrowDown
                                                        className="absolute z-10 -bottom-6 left-1/2 transform -translate-x-1/2 text-muted-foreground"
                                                    />
                                                ) : col < 2 ? (
                                                    <ArrowRight
                                                        className="absolute z-10 -right-6 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                                                    />
                                                ) : (
                                                    <ArrowDown
                                                        className="absolute z-10 -bottom-6 left-1/2 transform -translate-x-1/2 text-muted-foreground"
                                                    />
                                                )
                                            ) }
                                        </>
                                    ) }
                                </CardContent>
                            </Card>
                        )
                    } ) }
                </div>
            </Container>
        </section>
    )
}
