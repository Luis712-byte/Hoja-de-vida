import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <section>
      <Container>
        <Row className="text-center">
          <Col md={12}>
            <h3 className="mbr-section-title">
              <strong>¡Síguenos en Redes!</strong>
            </h3>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="auto">
            <div className="social-list">
              <a
                className="iconfont-wrapper bg-linkedin m-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077B5" />
              </a>
              <a
                className="iconfont-wrapper bg-instagram m-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#E4405F" />
              </a>
              <a
                className="iconfont-wrapper bg-Github m-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://Github.com"
                aria-label="Github"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" color="#000000" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
