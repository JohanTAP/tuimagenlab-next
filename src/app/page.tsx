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
      <div className=" bg-primary text-white p-4 text-center">
        <p className="text-xl mb-4">¿Cómo nos contactas?</p>
        <div className="flex justify-center space-x-4">
          <a href="https://wa.me/yourwhatsappnumber" className="text-white hover:underline">
            WhatsApp
          </a>
          <a href="mailto:contacto@tuimagenlab.cl" className="text-white hover:underline">
            Mail
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}