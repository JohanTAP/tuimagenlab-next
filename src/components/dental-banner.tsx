import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export default function DentalBanner ()
{
    return (
        <section className="w-full bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                <div className="text-center space-y-4 mb-8">
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                        ¿Eres dentista o propietario de una clínica dental?
                    </h2>
                    <p className="text-xl md:text-2xl">
                        Descubre cómo nuestras soluciones de laboratorio digital pueden mejorar la eficiencia y el crecimiento de tu
                        consultorio.
                    </p>
                </div>

                <Separator className="my-8" />

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
        </section>
    )
}

