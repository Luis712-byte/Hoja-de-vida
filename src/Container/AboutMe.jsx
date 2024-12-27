import React from 'react';
import Typewriter from "typewriter-effect";
import PDF from "../Assets/PDF/CVLuisAcosta.pdf";
import Resume from "../Assets/PDF/Resume.pdf";
import { LanguageContext } from "../Context/LanguageContext";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.downloadPDF = this.downloadPDF.bind(this);
  }

  downloadPDF(language) {
    const pdfUrl = language === "es" ? PDF : Resume;
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = language === "es" ? "CVLuisAcosta.pdf" : "Resume.pdf";
    anchor.click();
  }

  render() {
    return (
      <LanguageContext.Consumer>
        {({ language }) => (
          <section id="quien-soy">
            <div className="container" data-aos="fade-down" data-aos-duration="1000">
              <div className="text">
                <h1>
                  {language === "es" ? "Hola, Soy" : "Hello, I'm"} <br />
                  <span className="green my-name">Luis Acosta,</span>
                  <br />
                </h1>
                <div className="typing">
                  <h2>
                    <Typewriter
                      options={{
                        strings: [
                          language === "es" ? "Desarrollador Full-Stack" : "Full-Stack Developer",
                          language === "es" ? "Resolviendo Problemas con Código" : "Solving Problems with Code",
                          language === "es" ? "Construyendo Sistemas Robustos" : "Building Robust Systems",
                          language === "es" ? "Desarrollador en Constante Aprendizaje" : "Developer in Constant Learning",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 100,
                      }}
                    />
                  </h2>
                </div>
                <p>
                  {language === "es"
                    ? "¡Bienvenido a mi portafolio! Luis Acosta es un Desarrollador Full Stack con experiencia y una gran pasión por crear experiencias web visualmente impactantes e intuitivas. Con una combinación única de habilidades técnicas y creatividad, tengo la confianza para ofrecer soluciones personalizadas para diversos requerimientos de proyectos."
                    : "Welcome to my portfolio! Luis Acosta is a Full Stack Developer with experience and a strong passion for creating visually stunning and intuitive web experiences. With a unique blend of technical skills and creativity, I have the confidence to offer customized solutions for various project requirements."}
                </p>
                <div className="intro-btns">
                  <div className="form-group">
                    <button className="download-button" onClick={() => this.downloadPDF(language)}>
                      <div className="docs">
                        <svg
                          className="css-i6dzq1"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          fill="none"
                          strokeWidth="2"
                          stroke="currentColor"
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line y2="3" x2="12" y1="15" x1="12"></line>
                        </svg>
                        {language === "es" ? "Descargar Curriculum" : "Download Resume"}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default AboutMe;
