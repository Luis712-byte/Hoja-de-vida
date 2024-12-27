import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Foto from "../Assets/Perfil.jpg";
import flagES from "../Assets/Flag_of_Spain.svg";
import flagEN from "../Assets/Flag_of_the_United_States.svg";
import { useLanguage } from "../Context/LanguageContext";
const NavBar = () => {
  const { language, handleLanguageChange } = useLanguage();

  const handleToggle = (e) => {
    const selectedLanguage = e.target.checked ? "en" : "es";
    handleLanguageChange(selectedLanguage);
  };

  return (
    <Navbar expand="lg" className="navbar navbar-dropdown">
      <Container>
        <Navbar.Brand className="text-black d-flex align-items-center">
          <div className="container">
            <a className="nav-brand noselect" href="index.html">
              <img
                src={Foto}
                alt=""
                style={{ width: "40px", borderRadius: "20px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="nav-icon"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="scroll-progress-track">
            <div id="progress-bar" className="scroll-progress-thumb"></div>
          </div>
          <span
            className="ms-6 d-none d-md-inline-block"
            style={{ color: "#ffffff" }}
          >
            LUIS ENRIQUE ACOSTA CASSIANI
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarContent" className="ml-auto" />
        <div className="d-flex align-items-center ms-3 d-block d-lg-none" >
            <label className="switch ">
              <input
                type="checkbox"
                checked={language === "en"}
                onChange={handleToggle}
              />
              <span className="slider">
                <span className="icon ice d-block d-lg-none" >
                  <img
                    src={flagES}
                    alt="Español"
                    width="22px"
                    height="18px"
                    style={{ objectFit: "cover", borderRadius: "20px" }}
                  />
                </span>
                <span className="icon fire d-block d-lg-none" >
                  <img
                    src={flagEN}
                    alt="Inglés"
                    width="22px"
                    height="18px"
                    style={{ objectFit: "cover", borderRadius: "20px" }}
                  />
                </span>
              </span>
            </label>
          </div>
        <Navbar.Collapse id="navbarContent">
          <Nav className="ms-auto d-flex flex-lg-row ">
            <Nav.Link
              href="#quien-soy"
              className="nav-link-container js-scroll-trigger"
            >
              {language === "es" ? "¿Quién soy?" : "Who am I?"}
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className="nav-link-container js-scroll-trigger"
            >
              {language === "es" ? "Habilidades" : "Resume"}
            </Nav.Link>
            <Nav.Link
              href="#projects-container"
              className="nav-link-container js-scroll-trigger"
            >
              {language === "es" ? "Proyectos" : "Projects"}
            </Nav.Link>
            <Nav.Link
              href="#contacto"
              className="nav-link-container js-scroll-trigger"
            >
              {language === "es" ? "Contacto" : "Contact"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
            <div className="d-flex align-items-center ms-3 d-none d-lg-block" >
            <label className="switch ">
              <input
                type="checkbox"
                checked={language === "en"}
                onChange={handleToggle}
              />
              <span className="slider">
                <span className="icon ice d-none d-lg-block">
                  <img
                    src={flagES}
                    alt="Español"
                    width="22px"
                    height="18px"
                    style={{ objectFit: "cover", borderRadius: "20px" }}
                  />
                </span>
                <span className="icon fire d-none d-lg-block">
                  <img
                    src={flagEN}
                    alt="Inglés"
                    width="22px"
                    height="18px"
                    style={{ objectFit: "cover", borderRadius: "20px" }}
                  />
                </span>
              </span>
            </label>
          </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
