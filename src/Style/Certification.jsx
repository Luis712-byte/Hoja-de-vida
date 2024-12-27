import React from "react";
import BtnBack from "./BtnBack";
import { Container, Row, Col } from "react-bootstrap";

function Certificaciones() {
  return (
    <>
      <BtnBack></BtnBack>
      <Container>
        <Row className="justify-content-center">
          <h1 className="text-center">CERTIFICACIONES</h1>
        </Row>
      </Container>
    </>
  );
}

export default Certificaciones;
