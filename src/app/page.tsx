"use client";

import AboutUs from "../components/AboutUs";
import Background from "../components/Background";
import Contact from "../components/Contact";
import FitnessClass from "../components/FitnessClass";
import Hero from "../components/Hero";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Pricing from "../components/Pricing";
import Programs from "../components/Programs";




export default function Page() {

  return (
      <main className="min-h-screen  w-full text-white">
            <Header/>
            {/* Inicio */}
            <section className="relative">
            <Hero />
            <Background variant="start" />
            </section>
            {/* Clases con fondo variante derecha */}
            <section className="relative py-10">
              <Background variant="right" />
              <FitnessClass/>
            </section>
            {/* Programa con fondo variante derecha */}
            <section className="relative py-10">
              <Background variant="center" />
              <Programs />
            </section>
            {/* Pricing con fondo variante centro */}
            <section className="relative py-10">
              <Background variant="left" />
              <Pricing />
            </section>
            {/* AboutUs con fondo variante derecha */}
            <section className="relative py-10">
              <Background variant="right" />
              <AboutUs />
            </section>
            {/* Contact con fondo variante izquierda */}
            <section className="relative py-10">
              <Background variant="center" />
              <Contact />
            </section>
          <Footer />
      </main>
  );
}



