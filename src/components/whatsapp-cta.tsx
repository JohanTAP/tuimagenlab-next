"use client"

import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function WhatsAppCTA ()
{
    const [ showToast, setShowToast ] = useState( false )

    useEffect( () =>
    {
        const handleScroll = () =>
        {
            const scrollPosition = window.innerHeight + window.scrollY
            const pageHeight = document.documentElement.scrollHeight

            if ( scrollPosition >= pageHeight - 100 && !showToast )
            {
                setShowToast( true )
                toast(
                    <div className="flex flex-col items-center gap-2">
                        <h3 className="font-semibold">¿Necesitas ayuda?</h3>
                        <p>Contáctanos por WhatsApp para una atención personalizada.</p>
                        <Button onClick={ () => window.open( "https://api.whatsapp.com/send?phone=56944260108", "_blank" ) } className="bg-lime-500">
                            <MessageCircle className="mr-2 h-4 w-4" /> Contactar
                        </Button>
                    </div>,
                    {
                        duration: 10000,
                        position: "bottom-right",
                    },
                )
            }
        }

        window.addEventListener( "scroll", handleScroll )
        return () => window.removeEventListener( "scroll", handleScroll )
    }, [ showToast ] )

    return null // This component doesn't render anything directly
}
