import React, { useContext } from "react";
import { useLanguage } from "../Context/LanguageContext";
import foto1 from "../Assets/Pivvot_reducida.jpg";
import foto2 from "../Assets/flutter.png";
import foto3 from "../Assets/E-commerce.png";
import foto4 from "../Assets/Biblioteca.png";

const projectData = [
  {
    id: 1,
    title: {
      es: "PIVVOT MOBILITY",
      en: "PIVVOT MOBILITY",
    },
    subtitle: {
      es: "Proyecto de aplicación de scooter",
      en: "Scooter app project",
    },
    thumbnail: foto1,
    description: {
      es: "PIVVOT MOBILITY es una aplicación diseñada para facilitar la movilidad urbana mediante el alquiler de scooters eléctricos. Permite a los usuarios localizar, desbloquear y gestionar viajes de manera eficiente.",
      en: "PIVVOT MOBILITY is an app designed to facilitate urban mobility through electric scooter rentals. It allows users to locate, unlock, and manage trips efficiently.",
    },
    techStack: ["React Native", "Sass", "Typescript", "Expo", "Node Js"],
    Link: "https://play.google.com/store/apps/details?id=com.pivvot.scooter&hl=es_CO",
  },
  {
    id: 2,
    title: {
      es: "Go Service",
      en: "Go Service",
    },
    subtitle: {
      es: "Biblioteca digital",
      en: "Digital library",
    },
    thumbnail: foto2,
    description: {
      es: "Go Service es una biblioteca digital que permite a los usuarios buscar, reservar y gestionar libros y catálogos de manera sencilla y eficiente. Ideal para estudiantes y entusiastas de la lectura.",
      en: "Go Service is a digital library that allows users to search, reserve, and manage books and catalogs simply and efficiently. Ideal for students and reading enthusiasts.",
    },
    techStack: ["Flutter", "PostgreSQL"],
    github: "https://github.com/Luis712-byte/Proyecto-Flutter",
  },
  {
    id: 3,
    title: {
      es: "FashionCode",
      en: "FashionCode",
    },
    subtitle: {
      es: "E-commerce",
      en: "E-commerce",
    },
    thumbnail: foto3,
    description: {
      es: "FashionCode es una plataforma de comercio electrónico diseñada para ofrecer una experiencia de compra moderna y fluida. Desarrollada con tecnologías web de vanguardia.",
      en: "FashionCode is an e-commerce platform designed to offer a modern and seamless shopping experience. Developed with cutting-edge web technologies.",
    },
    techStack: ["React", "SQL", "CSS"],
    liveSite: "https://proyecto-desarrollo.vercel.app/",
    github: "https://github.com/Luis712-byte/Proyecto-Desarrollo",
  },
  {
    id: 4,
    title: {
      es: "Biblioteca Universidad de la Costa",
      en: "University of the Coast Library",
    },
    subtitle: {
      es: "Una aplicación web innovadora",
      en: "An innovative web app",
    },
    thumbnail: foto4,
    description: {
      es: "Aplicación web para la Biblioteca de la Universidad de la Costa que mejora el acceso a recursos académicos, permite la búsqueda avanzada de materiales y facilita la gestión de préstamos.",
      en: "A web application for the University of the Coast Library that improves access to academic resources, enables advanced material search, and facilitates loan management.",
    },
    techStack: ["React", "Firebase", "CSS"],
    liveSite: "https://biblioteca-tan.vercel.app/",
    github: "https://github.com/Luis712-byte/Biblioteca",
  },
];

const ProjectArticle = ({
  id,
  title,
  subtitle,
  description,
  techStack,
  liveSite,
  github,
  Link,
  thumbnail,
  isReversed,
}) => {
  const { language } = useLanguage();

  const isLiveSiteVisible1 = id > 2;
  const isLiveSiteVisible2 = id <= 1;

  return (
    <article className="project">
      <div
        className={`row align-items-center ${
          isReversed ? "flex-row-reverse" : ""
        }`}
      >
        <div className="col-md-6">
          <a
            href={liveSite}
            target="_blank"
            rel="noreferrer"
            className="project-img"
          >
            <img
              src={thumbnail}
              alt={title[language]}
              title={title[language]}
              className="img-fluid project-img"
            />
          </a>
        </div>
        <div className="col-md-6">
          <h3>0{id}</h3>
          <h2>{title[language]}</h2>
          <p>{description[language]}</p>
          <ul className="tech-stack">
            {techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <ul className="project-links">
            {isLiveSiteVisible2 && (
              <li>
                <a
                  href={Link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover-effect"
                >
                  {language === "es" ? "Enlace →" : "Link →"}
                </a>
              </li>
            )}
            {github && (
              <li>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover-effect"
                >
                  {language === "es" ? "GitHub →" : "GitHub →"}
                </a>
              </li>
            )}
            {isLiveSiteVisible1 && (
              <li>
                <a
                  href={liveSite}
                  target="_blank"
                  rel="noreferrer"
                  className="hover-effect"
                >
                  {language === "es" ? "Sitio en vivo →" : "Live Site →"}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </article>
  );
};

const ProjectsSection = () => {
  const { language } = useLanguage();
  return (
    <div>
      <section className="projects-container" id="projects-container">
        <section className="skills-header">
          <h2 className="skills-title">
            {language === "es" ? "Proyectos" : "Projects"}
          </h2>
          <p className="skills-description">
            {language === "es"
              ? "Una colección de proyectos innovadores en los que he trabajado, abarcando desde aplicaciones web hasta soluciones móviles, con un enfoque en la calidad, escalabilidad y experiencia del usuario."
              : "A collection of innovative projects I have worked on, ranging from web applications to mobile solutions, with a focus on quality, scalability, and user experience."}
          </p>
        </section>
      </section>
      <section className="projects-dinamic">
        <div className="row">
          {projectData.map((project, index) => (
            <div key={project.id} className="col-12 col-md-6 mb-4" >
              <ProjectArticle
                id={project.id}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                techStack={project.techStack}
                liveSite={project.liveSite}
                github={project.github}
                Link={project.Link}
                thumbnail={project.thumbnail}
                isReversed={index % 2 !== 0}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
