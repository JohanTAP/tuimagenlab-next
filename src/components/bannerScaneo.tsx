"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// Importa el ícono que desees de Lucide (por ejemplo “Scan”)
import { Scan } from "lucide-react";

export function BannerEscaneo ()
{
    return (
        <Card className="relative my-8 mx-auto max-w-3xl bg-primary text-primary-foreground">
            <CardHeader className="flex items-center space-x-4">
                <Scan className="h-12 w-12" />
                <div>
                    <CardTitle className="text-2xl">¡También vamos a escanear tu consulta!</CardTitle>
                    <CardDescription className="text-white/90">
                        Di adiós a las impresiones tradicionales. Con nuestro escaneo intraoral,
                        obtendrás resultados más precisos y cómodos para tus pacientes.
                    </CardDescription>
                </div>
            </CardHeader>
        </Card>
    );
}
