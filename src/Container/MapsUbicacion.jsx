import React, { useState } from "react";
import { useLanguage } from "../Context/LanguageContext";

const MapsUbicacion = () => {
  const [showCard, setShowCard] = useState(true);
  const [showCardTitle, setShowCardTitle] = useState(true);
  const [cardColor, setCardColor] = useState("#ffffff");
  const [cardOpacity, setCardOpacity] = useState(100);
  const [alignContent, setAlignContent] = useState(1);

  const { language } = useLanguage();

  const handleAlignChange = (e) => setAlignContent(Number(e.target.value));

  return (
    <>
      {" "}
      <section className="skills-header">
        <h1 className="skills-title" style={{margin: 0}}>
          {language === "es" ? "Ubicación en el Mapa" : "Location on the Map"}
        </h1>
      </section>
      <section
        data-bs-version="5.1"
        className="contacts4 map1 cid-uxk1GImM79"
        id="contacts-3-uxk1GImM79"
        style={{ backgroundColor: "rgb(233, 240, 240)" }}
      >
        <div className="main_wrapper">
          <div className="b_wrapper">
            <div className="container-fluid">
              <div className="row justify-content-start">
                <div className="col-md-5 col-lg-4 item-wrapper">
                  <h5 className="cardTitle mbr-fonts-style mb-2 display-5">
                    <strong>
                      {language === "es"
                        ? "Datos de Contacto"
                        : "Contact Information"}
                    </strong>
                  </h5>
                  <ul className="list mbr-fonts-style display-7">
                    <li className="mbr-text item-wrap">
                      {language === "es" ? "Teléfono:" : "Phone:"}
                      <a href="tel:123-456-7890" className="text-black">
                        3012618709
                      </a>
                    </li>

                    <li className="mbr-text item-wrap">
                      {language === "es" ? "Correo:" : "Email:"}
                      <a
                        href="mailto:info@desarrolladorpro.com"
                        className="text-black"
                      >
                        luisacosta7417@gmail.com
                      </a>
                    </li>

                    <li className="mbr-text item-wrap">
                      {language === "es" ? "Dirección:" : "Address:"}{" "}
                      Barranquilla, Colombia
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="google-map">
            <iframe
              title="Ubicación en Google Maps: Barranquilla, Colombia"
              src="https://www.google.com/maps?q=Barranquilla,Colombia&output=embed"
              style={{
                width: "90%",
                height: "500px",
                borderRadius: "5%",
                marginLeft: "100px",
              }}
              className="google-map_frame"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapsUbicacion;
