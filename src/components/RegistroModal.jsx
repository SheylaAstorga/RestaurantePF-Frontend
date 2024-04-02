import logoSazón from "../../src/img/LogoSazon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Button, Form, Modal } from "react-bootstrap";

const RegistroModal = () => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>
            <p className="fs-5 mb-0">Registrarse</p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="text-center">
            <img
              src={logoSazón}
              alt="logo sazón del alma"
              className="img-fluid mb-5"
              style={{ width: "200px", height: "auto" }}
            />
          </div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="correo@correo.com" required minLength={12} maxLength={256}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese una contraseña"
                required
                minLength={8}
                maxLength={16}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirmar contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese nuevamente su contraseña"
                minLength={8}
                maxLength={16}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Acepto los términos y condiciones"
                required
              />
            </Form.Group>
            <div className="text-center my-4">
              <Button className="botonRegistrarse" type="submit">
                Registarse
              </Button>
              <p className="mt-3">o regístrate con:</p>
            </div>
          </Form>
          <div className=" text-center">
              <Button
                variant="outline-primary"
                className="social-button me-3 my-2 w-25"
              >
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </Button>
              <Button variant="outline-danger" className="social-button w-25">
                <FontAwesomeIcon icon={faGoogle} className="social-icon" />
              </Button>
            </div>
        </Modal.Body>
        <Modal.Footer>
        <p>¿Ya tienes una cuenta?</p>
          <a href="/registro" className="text-decoration-none linkRegistrate">
            Inicia sessión aquí
          </a>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default RegistroModal;
