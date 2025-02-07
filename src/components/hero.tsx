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
} from "@/components/ui/carousel";

const dentalCases = [
    {
        id: 1,
        title: "Prótesis Digital - Caso 1",
        description: "Diseño y manufactura a medida para restaurar sonrisas.",
        image: "/placeholder.svg",
    },
    {
        id: 2,
        title: "Prótesis Digital - Caso 2",
        description: "Innovación y precisión en cada detalle.",
        image: "/placeholder.svg",
    },
    {
        id: 3,
        title: "Prótesis Digital - Caso 3",
        description: "Soluciones personalizadas para cada paciente.",
        image: "/placeholder.svg",
    },
];

const Hero = () =>
{
    const [ activeIndex, setActiveIndex ] = useState( 0 );

    useEffect( () =>
    {
        const interval = setInterval( () =>
        {
            setActiveIndex( ( prevIndex ) => ( prevIndex + 1 ) % dentalCases.length );
        }, 5000 );

        return () => clearInterval( interval );
    }, [] );

    return (
        <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
            <Carousel>
                <CarouselContent>
                    { dentalCases.map( ( item, index ) => (
                        <CarouselItem key={ item.id } className="relative w-full h-[calc(100vh-80px)]" data-active={ index === activeIndex }>
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
