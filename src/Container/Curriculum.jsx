import React, { useRef } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import MapsUbicacion from "./MapsUbicacion";
import { LanguageProvider } from "../Context/LanguageContext";
import Skill from "./Skill";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Proyect from "./Proyect";

export default function Curriculum() {
  const contentRef = useRef();

  return (
    <LanguageProvider>
      <Navbar contentRef={contentRef}></Navbar>
      <section>
        <AboutMe></AboutMe>
      </section>
      <section>
        <Skill></Skill>
      </section>
      <section>
        <Proyect></Proyect>
      </section>
      <section>
        <Contact></Contact>
      </section>
      <section>
        <MapsUbicacion></MapsUbicacion>
      </section>
    </LanguageProvider>
  );
}
