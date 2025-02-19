import { ContactForm } from "@/components/contactform"
import { Container } from "@/components/ui/container"
/* import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock } from "lucide-react" */

/* const locations = [
    {
        name: "Talca Centro",
        address: "Uno Sur 1122, Of. 413 - Piso 4 Edif. Plaza Talca",
        phone: "+56 71 2236569",
        hours: "Lun - Vie de 09:00 a 18:30, Sábados de 10:00 a 13:30",
    },
    {
        name: "Talca Las Rastras",
        address: "Av. 30 Oriente 1546, Of. 704 - Piso 7, Edif. Centro Las Rastras II",
        phone: "+56 71 274 0353",
        hours: "Lun - Vie de 09:00 a 14:00 y 15:00 a 18:30, Sábados de 10:00 a 13:30",
    },
    {
        name: "Talca Pichimapu",
        address: "Av. Las Rastras 1285, Of. 404 - Piso 4, Edif. Especialidades Pichimapu",
        phone: "+56 71 298 1717",
        hours: "Lun - Vie de 10:00 a 14:00 y 15:00 a 19:00, Sábados cerrado (Previa reserva de hora)",
    },
    {
        name: "Sucursal Chillán",
        address: "Bulnes 847 (Entre Sargento Aldea e Isabel Riquelme), Edificio Alicura Of. 102 Piso 1",
        phone: "+56 9 4960 6716 / +56 42 225 1543",
        hours: "Lun - Vie de 09:00 a 18:30, Sábados de 10:00 a 13:30",
    },
    {
        name: "Sucursal Bulnes",
        address: "Aníbal Pinto 320 Local B, Frente a Plaza de Armas",
        phone: "+56 44 368 3380",
        hours: "Lun - Vie de 09:00 a 14:00 y 15:00 a 18:30, Sábados de 10:00 a 13:30 (Previa reserva de hora)",
    },
] */

export function ContactLocations ()
{
    return (
        <section className="py-20 w-full">

                <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
                <ContactForm />
                {/*<h2 className="text-3xl font-bold text-center mb-12">Nuestros Centros de RX con escáner intraoral</h2>
                 <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    { locations.map( ( location, index ) => (
                        <Card key={ index } className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <CardHeader>
                                <CardTitle>{ location.name }</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-start mb-2">
                                    <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                                    <p>{ location.address }</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    <Phone className="mr-2 h-5 w-5 text-muted-foreground" />
                                    <p>{ location.phone }</p>
                                </div>
                                <div className="flex items-start">
                                    <Clock className="mr-2 h-5 w-5 text-muted-foreground" />
                                    <p>{ location.hours }</p>
                                </div>
                            </CardContent>
                        </Card>
                    ) ) }
                </div> */}
                <div className="mt-12 text-center">
                    <p className="text-xl mb-4">¿Cómo nos contactas?</p>
                    <div className="flex justify-center space-x-4">
                        <a href="https://api.whatsapp.com/send?phone=56944260108" className="text-primary hover:underline">
                            WhatsApp
                        </a>
                        <a href="mailto:contacto@tuimagenlab.cl" className="text-primary hover:underline">
                            Mail
                        </a>
                    </div>
                </div>

        </section>
    )
}
