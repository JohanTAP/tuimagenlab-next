"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

// Opcional: si usas Tailwind + shadcn/ui, puedes importar Input, Label, Textarea, etc.
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

export function ContactForm ()
{
    const [ state, handleSubmit ] = useForm( "mbldpkjk" );

    if ( state.succeeded )
    {
        return (
            <Card className="px-4 py-4 justify-center items-center text-center">
            <p className="text-green-600 font-semibold">
                ¡Gracias! Tu mensaje fue enviado correctamente.
            </p>
            </Card>
        );
    }

    return (

        <form
            onSubmit={ handleSubmit }
            className="flex flex-col gap-4 max-w-md mx-auto"
        >
            <Card className="px-4 py-6">
                <div>
                    <label htmlFor="email" className="block mb-1 font-medium">
                        Correo electrónico
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="border rounded p-2 w-full"
                        placeholder="tu-correo@ejemplo.com"
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={ state.errors }
                        className="text-red-500 text-sm mt-1"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block mb-1 font-medium">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={ 4 }
                        className="border rounded p-2 w-full"
                        placeholder="¿En qué podemos ayudarte?"
                        required
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={ state.errors }
                        className="text-red-500 text-sm mt-1"
                    />
                </div>

                <Button
                    type="submit"
                    disabled={ state.submitting }
                    className="bg-primary text-white font-semibold py-2 px-4 rounded hover:opacity-90"
                >
                    Enviar
                </Button>
            </Card>
        </form>
    );
}
