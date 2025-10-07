"use client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
//import OurServices from "@/components/OurServices";
import Pricing from "@/components/Pricing";
import AboutUs from "@/components/AboutUs";
import FitnessClass from "@/components/FitnessClass";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Programs from "@/components/Programs";



export default function Page() {

  return (
      <main className="min-h-screen  w-full text-white">
            <Header/>
            <section className="relative">
            <Hero />
            <Background variant="start" />
            </section>
            
            {/* Clases con fondo variante derecha */}
            <section className="relative py-20">
              <Background variant="right" />
              <FitnessClass/>
            </section>
            {/* Programa con fondo variante derecha */}
            <section className="relative py-20">
              <Background variant="center" />
              <Programs />
            </section>
            {/* Pricing con fondo variante centro */}
            <section className="relative py-20">
              <Background variant="left" />
              <Pricing />
            </section>
            {/* AboutUs con fondo variante derecha */}
            <section className="relative py-20">
              
              <AboutUs />
            </section>
            {/* Contact con fondo variante izquierda */}
            <section className="relative py-20">
              <Background variant="right" />
              <Contact />
            </section>
          <Footer />
      </main>
  );
}



