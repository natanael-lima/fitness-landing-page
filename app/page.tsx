"use client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
//import OurServices from "@/components/OurServices";
import Pricing from "@/components/Pricing";
import AboutUs from "@/components/AboutUs";
import FitnessCarousel from "@/components/FitnessCarousel";



export default function Page() {

  return (
      <main className="min-h-screen w-full bg-zinc-900 text-white">
        
          {/* Contenedor flex para centrar vertical y horizontalmente */}
          <div className="flex items-center justify-center min-h-screen">
            <Hero />
          </div>
           {/* Contenido centrado y más angosto */}
          <Header/>
          <FitnessCarousel/>
          <section className="py-12">
            
            <AboutUs />
            <Pricing />
            <Contact />
          </section>
          <Footer />
      </main>

  );
}



