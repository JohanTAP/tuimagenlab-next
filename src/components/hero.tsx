"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import
{
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

const dentalCases = [
    {
        id: 1,
        title: "Prótesis Digital",
        description: "Diseño y manufactura a medida para restaurar sonrisas.",
        image: "/7.png",
    },
    {
        id: 2,
        title: "Prótesis Digital",
        description: "Innovación y precisión en cada detalle.",
        image: "/11.png",
    },
    {
        id: 3,
        title: "Prótesis Digital",
        description: "Soluciones personalizadas para cada paciente.",
        image: "/12.png",
    },
];

const Hero = () =>
{
    const [ emblaApi, setEmblaApi ] = useState<CarouselApi | null>( null );

    useEffect( () =>
    {
        if ( !emblaApi ) return;

        const interval = setInterval( () =>
        {
            if ( emblaApi.canScrollNext() )
            {
                emblaApi.scrollNext();
            } else
            {
                emblaApi.scrollTo( 0 );
            }
        }, 4000 );

        return () => clearInterval( interval );
    }, [ emblaApi ] );

    return (
        <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
            <Carousel setApi={ setEmblaApi }>
                <CarouselContent>
                    { dentalCases.map( ( item ) => (
                        <CarouselItem
                            key={ item.id }
                            className="relative w-full h-[calc(100vh-80px)]"
                        >
                            <Image
                                src={ item.image }
                                alt={ item.title }
                                fill
                                style={ { objectFit: "cover" } }
                            />
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <div className="absolute bottom-10 left-10 text-white z-10">
                                <h2 className="text-4xl font-bold">{ item.title }</h2>
                                <p className="mt-2 text-lg">{ item.description }</p>
                            </div>
                        </CarouselItem>
                    ) ) }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
};

export default Hero;
