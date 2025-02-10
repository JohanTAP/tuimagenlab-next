import { Container } from "@/components/ui/container"

export function MissionSection ()
{
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <Container>
                <h2 className="text-3xl font-bold mb-8 text-center">Nuestra Misión</h2>
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <p className="text-lg">
                        En Tu Imagen Lab, nos dedicamos a ofrecer la más alta calidad en prestaciones de laboratorio dental,
                        combinando tecnología de punta con un servicio excepcional.
                    </p>
                    <p className="text-lg">
                        Nos preocupamos por cada detalle, entregando piezas únicas que permiten a nuestros clientes proporcionar
                        tratamientos mejores y más exitosos en el menor tiempo posible.
                    </p>
                </div>
            </Container>
        </section>
    )
}
