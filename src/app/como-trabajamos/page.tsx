import type { Metadata } from "next"
import { WorkflowHero } from "./components/workflow-hero"
import { WorkflowSteps } from "./components/workflow-steps"
import { WorkflowDelivery } from "./components/workflow-delivery"
import { WorkflowTimeline } from "./components/workflow-timeline"

export const metadata: Metadata = {
    title: "Cómo Trabajamos | Tu Imagen Lab",
    description: "Conoce nuestro proceso de trabajo en Tu Imagen Lab, desde el escaneo hasta la entrega de tu producto.",
}

export default function HowWeWorkPage ()
{
    return (
        <main className="min-h-screen bg-background pb-16">
            <WorkflowHero />
            <WorkflowSteps />
            <WorkflowDelivery />
            <WorkflowTimeline />
        </main>
    )
}
