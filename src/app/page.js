"use client";
import React from "react";
import About from "@/components/about/about";
import Header from "@/components/Header/Header";
import MainSection from "@/components/MainSection/MainSection";
import SkillsSection from "@/components/skillsSection/SkillsSection";
import ContactSection from "@/components/ContactSection/Contact";
import Footer from "@/components/Footer/Footer";
import Slider from "@/components/LogosSection/Logos";
import Projects from "@/components/Projects_Section/Projects";

export default function Home() {
  return (
    <>
      <Header />

      <div id="home">
        <MainSection />
      </div>
      <div>
        <Slider />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
