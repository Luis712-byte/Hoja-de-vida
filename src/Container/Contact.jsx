import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../Context/LanguageContext";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [alert, setAlert] = useState({ type: "", message: "" });

  const { language } = useLanguage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  
      const response = await axios.post('https://hoja-de-vida-backend.onrender.com/send-email', formData);
      console.log("Respuesta del servidor:", response);
  
      setAlert({ type: "success", message: language === "es" ? "¡Gracias por contactarnos!" : "Thank you for contacting us!" });
  
      setFormData({ name: "", email: "", phone: "", message: "" });
  
    setTimeout(() => setAlert({ type: "", message: "" }), 5000);
  };
  

  return (
    <section className="cid-uxk1GImjrl " id="contacto" style={{ backgroundColor: "#e9f0f0" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 content-head">
            <div className="mbr-section-head mb-5">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <FontAwesomeIcon icon={faEnvelope} size="4x" color="#40798c" />
              </div>
              <h3 className="mbr-section-title text-center display-2">
                <b>{language === "es" ? "¿QUIERES QUE TRABAJEMOS JUNTOS?" : "DO YOU WANT TO WORK TOGETHER?"}</b>
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
            {alert.message && (
              <Alert variant={alert.type} className="text-center">
                {alert.message}
              </Alert>
            )}
            <Form onSubmit={handleSubmit} className="form-with-styler">
              <Form.Group controlId="name" className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder={language === "es" ? "Nombre" : "Name"}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email" className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder={language === "es" ? "Correo" : "Email"}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="phone" className="mb-3">
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder={language === "es" ? "Teléfono" : "Phone"}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="message" className="mb-3">
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder={language === "es" ? "Mensaje" : "Message"}
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <div className="btn btn-primary">
                <Button type="submit" onClick={handleSubmit}>
                  {language === "es" ? "Enviar Mensaje" : "Send Message"}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
