"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import
{
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import
{
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

export default function DentalBanner ()
{
    // Imágenes para el carrusel en móvil (puedes agregar más si lo requieres)
    const mobileImages = [
        {
            id: 1,
            src: "/27.png",
        },
        {
            id: 2,
            src: "/29.png",
        },
        {
            id: 3,
            src: "/30.png",
        },
        {
            id: 4,
            src: "/31.png",
        },
        {
            id: 5,
            src: "/33.png",
        },
        {
            id: 6,
            src: "/34.png",
        },
    ];

    // API del carrusel para controlar el scroll automático
    const [ carouselApi, setCarouselApi ] = useState<CarouselApi | null>( null );

    useEffect( () =>
    {
        if ( !carouselApi ) return;

        const interval = setInterval( () =>
        {
            if ( carouselApi.canScrollNext() )
            {
                carouselApi.scrollNext();
            } else
            {
                carouselApi.scrollTo( 0 );
            }
        }, 4000 );

        return () => clearInterval( interval );
    }, [ carouselApi ] );

    return (
        <section className="w-full bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                <div className="text-center space-y-4 mb-8">
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                        ¿Eres dentista o propietario de una clínica dental?
                    </h2>
                    <p className="text-xl md:text-2xl">
                        Descubre cómo nuestras soluciones de laboratorio digital pueden mejorar
                        la eficiencia y el crecimiento de tu consultorio.
                    </p>
                </div>

                <Separator className="my-8" />

                {/* Vista móvil: Carrusel con flechas de shadcn */ }
                <div className="block md:hidden relative">
                    <Carousel setApi={ setCarouselApi }>
                        <CarouselContent>
                            { mobileImages.map( ( item ) => (
                                <CarouselItem key={ item.id } className="relative w-full h-64">
                                    <Image
                                        src={ item.src }
                                        alt="Dental Banner"
                                        fill
                                        style={ { objectFit: "cover" } }
                                    />
                                    <div className="absolute inset-0 bg-black opacity-40" />
                                </CarouselItem>
                            ) ) }
                        </CarouselContent>
                        {/* Sobrescribimos el estilo de las flechas para que siempre estén visibles */ }
                        <CarouselPrevious
                            className="absolute left-2 top-1/2 z-10 w-10 h-10 -translate-y-1/2
                         rounded-full flex items-center justify-center
                         bg-white text-black shadow hover:bg-white/90"
                        />
                        <CarouselNext
                            className="absolute right-2 top-1/2 z-10 w-10 h-10 -translate-y-1/2
                         rounded-full flex items-center justify-center
                         bg-white text-black shadow hover:bg-white/90"
                        />
                    </Carousel>
                </div>

                {/* Vista tablet/desktop: Versión original con ResizablePanelGroup */ }
                <div className="hidden md:block">
                    <ResizablePanelGroup
                        direction="horizontal"
                        className="min-h-[600px] w-full rounded-lg border border-primary-foreground/20"
                    >
                        <ResizablePanel defaultSize={ 50 }>
                            <div className="flex h-full items-center justify-center p-6">
                                <Image
                                    src="/37.png"
                                    alt="Digital Dental Lab Equipment"
                                    width={ 500 }
                                    height={ 500 }
                                    className="rounded-lg object-cover h-full w-full"
                                />
                            </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={ 50 }>
                            <ResizablePanelGroup direction="vertical">
                                <ResizablePanel defaultSize={ 25 }>
                                    <div className="flex h-full items-center justify-center p-6">
                                        <Image
                                            src="/27.png"
                                            alt="3D Printed Dental Prosthetics"
                                            width={ 500 }
                                            height={ 200 }
                                            className="rounded-lg object-cover h-full w-full"
                                        />
                                    </div>
                                </ResizablePanel>
                                <ResizableHandle />
                                <ResizablePanel defaultSize={ 75 }>
                                    <div className="flex h-full items-center justify-center p-6">
                                        <Image
                                            src="/58.png"
                                            alt="Digital Dental Workflow"
                                            width={ 500 }
                                            height={ 400 }
                                            className="rounded-lg object-cover h-full w-full"
                                        />
                                    </div>
                                </ResizablePanel>
                            </ResizablePanelGroup>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </div>
            </div>
        </section>
    );
}
