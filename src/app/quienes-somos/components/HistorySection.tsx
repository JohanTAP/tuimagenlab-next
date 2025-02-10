import { Container } from "@/components/ui/container"

export function HistorySection ()
{
    return (
        <section className="py-20 bg-background">
            <Container>
                <h2 className="text-3xl font-bold mb-8 text-center">Nuestra Historia</h2>
                <div className="max-w-3xl mx-auto space-y-6">
                    <p className="text-lg text-muted-foreground">
                        Tu Imagen Lab es una evolución de Tu Imagen Radiografías Dentales, nacida en 2019 cuando decidimos
                        convertirnos en el primer centro radiológico del país en contar con el escáner intraoral Primescan.
                    </p>
                    <p className="text-lg text-muted-foreground">
                        Desde entonces, nos hemos perfeccionado en impresión 3D para aplicaciones dentales, llevando la innovación
                        al siguiente nivel en la odontología digital.
                    </p>
                </div>
            </Container>
        </section>
    )
}
