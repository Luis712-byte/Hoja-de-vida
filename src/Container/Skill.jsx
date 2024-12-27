import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext"; 

const Skill = () => {
  const { language } = useContext(LanguageContext);

  const skills = [
    {
      name: "HTML",
      icon: "html",
      description: language === "es" ? "Estructura páginas web." : "Structure web pages.",
    },
    {
      name: "CSS",
      icon: "css",
      description: language === "es" ? "Estiliza y diseña páginas web." : "Style and design web pages.",
    },
    {
      name: "JavaScript",
      icon: "js",
      description: language === "es" ? "Agrega interactividad web." : "Adds web interactivity.",
    },
    {
      name: "React JS",
      icon: "react",
      description: language === "es" ? "Crea interfaces dinámicas." : "Creates dynamic interfaces.",
    },
    {
      name: "React Native",
      icon: "react",
      description: language === "es" ? "Apps móviles con React." : "Mobile apps with React.",
    },
    {
      name: "PHP",
      icon: "php",
      description: language === "es" ? "Desarrolla aplicaciones dinámicas." : "Develops dynamic applications.",
    },
    {
      name: "Node JS",
      icon: "nodejs",
      description: language === "es" ? "JavaScript en servidores." : "JavaScript on servers.",
    },
    {
      name: "PostgreSQL",
      icon: "postgres",
      description: language === "es" ? "Base de datos avanzada." : "Advanced database.",
    },
    {
      name: "SQL/MySQL",
      icon: "mysql",
      description: language === "es" ? "Gestiona bases de datos." : "Manages databases.",
    },
    {
      name: "Firebase",
      icon: "firebase",
      description: language === "es" ? "Desarrollo web y móvil." : "Web and mobile development.",
    },
    {
      name: "SASS",
      icon: "sass",
      description: language === "es" ? "CSS eficiente y avanzado." : "Efficient and advanced CSS.",
    },
    {
      name: "TypeScript",
      icon: "ts",
      description: language === "es" ? "JavaScript con tipos." : "JavaScript with types.",
    },
    {
      name: "Flutter",
      icon: "flutter",
      description: language === "es" ? "Apps multiplataforma." : "Multiplatform apps.",
    },
    {
      name: "Figma",
      icon: "figma",
      description: language === "es" ? "Diseño colaborativo en la nube." : "Collaborative design in the cloud.",
    },
    { name: "Git", icon: "git", description: language === "es" ? "Control de versiones." : "Version control." },
    {
      name: "GitHub",
      icon: "github",
      description: language === "es" ? "Colabora en proyectos de código." : "Collaborate on code projects.",
    },
    {
      name: "GitLab",
      icon: "gitlab",
      description: language === "es" ? "Similar a GitHub con DevOps." : "Similar to GitHub with DevOps.",
    },
  ];

  return (
    <div className="skills" id="skills">
      <section className="skills-header">
        <h2 className="skills-title">
          {language === "es" ? "Habilidades Técnicas" : "Technical Skills"}
        </h2>
        <p className="skills-description">
          {language === "es"
            ? "Un conjunto diverso de herramientas y tecnologías utilizadas para desarrollar soluciones web y móviles, desde la estructura hasta el diseño y el backend."
            : "A diverse set of tools and technologies used to develop web and mobile solutions, from structure to design and backend."}
        </p>
      </section>
      <section className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img
              src={`https://skillicons.dev/icons?i=${skill.icon}`}
              alt={`${skill.name} Icon`}
              className="skill-icon"
            />
            <div className="skill-title">{skill.name}</div>
            <div className="skill-description">{skill.description}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skill;
