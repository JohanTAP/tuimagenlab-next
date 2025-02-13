import DentalBanner from "@/components/dental-banner";
import DentalLabSection from "@/components/dental-lab-section";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";

export default function Inicio ()
{
  return (
    <>
      <Hero />
      <DentalLabSection />
      <DentalBanner />
      <div className=" bg-muted text-primary p-4 text-center">
        <p className="text-xl mb-4">¿Cómo nos contactas?</p>
        <div className="flex justify-center space-x-4">
          <a href="https://api.whatsapp.com/send?phone=56986733078" className="text-primary hover:underline">
            WhatsApp
          </a>
          <a href="mailto:contacto@tuimagenlab.cl" className="text-primary hover:underline">
            Mail
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}