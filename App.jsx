import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(){
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="container">
            <Hero />
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <About />
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <Skills />
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <Experience />
          </div>
        </section>

        <section className="section" id="work">
          <Work />
        </section>

        <section className="section" id="testimonials">
          <div className="container">
            <Testimonials />
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
