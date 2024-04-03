import { Card, Col, Container, Row } from "react-bootstrap";
import "../../style/acercaDeNosotros.css";

const AcercaDeNostros = () => {
  return (
    <section className="colorFondoAN">
      <Container>
        <h2 className="colorTituloAN text-center pt-3 pt-md-5 letraTitulos tamanioLetraTituloAN">
          Nuestro equipo
        </h2>
        <Row className="justify-content-center py-3 py-md-5">
          <Col xs={10} md={6} lg={4} className="py-2">
            <Card className="text-center colorFondoCardAN colorLetraCardAN p-3">
              <Card.Img
                variant="top"
                src="holder.js/100px180?text=Image cap"
                alt="Sheyla Astorga"
              />
              <Card.Body>
                <Card.Title className="letraSubtitulos">
                  Sheyla Astorga
                </Card.Title>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="#">
                  <i className="bi bi-linkedin colorIconoCardAN fs-3"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="bi bi-github colorIconoCardAN fs-3"></i>
                </Card.Link>
              </Card.Footer>
            </Card>
          </Col>

          <Col xs={10} md={6} lg={4} className="py-2">
            <Card className="text-center colorFondoCardAN colorLetraCardAN p-3">
              <Card.Img
                variant="top"
                src="holder.js/100px180?text=Image cap"
                alt="Thiago Benjamín Fiol"
              />
              <Card.Body>
                <Card.Title className="letraSubtitulos">
                  Thiago Benjamín Fiol
                </Card.Title>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="#">
                  <i className="bi bi-linkedin colorIconoCardAN fs-3"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="bi bi-github colorIconoCardAN fs-3"></i>
                </Card.Link>
              </Card.Footer>
            </Card>
          </Col>

          <Col xs={10} md={6} lg={4} className="py-2">
            <Card className="text-center colorFondoCardAN colorLetraCardAN p-3">
              <Card.Img
                variant="top"
                src="holder.js/100px180?text=Image cap"
                alt="Javier Exequiel Jiménez"
              />
              <Card.Body>
                <Card.Title className="letraSubtitulos">
                  Javier Exequiel Jiménez
                </Card.Title>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="#">
                  <i className="bi bi-linkedin colorIconoCardAN fs-3"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="bi bi-github colorIconoCardAN fs-3"></i>
                </Card.Link>
              </Card.Footer>
            </Card>
          </Col>

          <Col xs={10} md={6} lg={4} className="py-2">
            <Card className="text-center colorFondoCardAN colorLetraCardAN p-3">
              <Card.Img
                variant="top"
                src="holder.js/100px180?text=Image cap"
                alt="Natalia del Valle Morales"
              />
              <Card.Body>
                <Card.Title className="letraSubtitulos">
                  Natalia del Valle Morales
                </Card.Title>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="#">
                  <i className="bi bi-linkedin colorIconoCardAN fs-3"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="bi bi-github colorIconoCardAN fs-3"></i>
                </Card.Link>
              </Card.Footer>
            </Card>
          </Col>

          <Col xs={10} md={6} lg={4} className="py-2">
            <Card className="text-center colorFondoCardAN colorLetraCardAN p-3">
              <Card.Img
                variant="top"
                src="holder.js/100px180?text=Image cap"
                alt="Daniel Emmanuel Santi Araoz"
              />
              <Card.Body>
                <Card.Title className="letraSubtitulos">
                  Daniel Emmanuel Santi Araoz
                </Card.Title>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="#">
                  <i className="bi bi-linkedin colorIconoCardAN fs-3"></i>
                </Card.Link>
                <Card.Link href="#">
                  <i className="bi bi-github colorIconoCardAN fs-3"></i>
                </Card.Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AcercaDeNostros;
