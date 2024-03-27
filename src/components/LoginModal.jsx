import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import logoSazón from "../../src/img/LogoSazon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const LoginModal = () => {
  const handleLogin = () => {
    console.log("Iniciando sesión...");
  };

  const handleRegister = () => {
    console.log("Redirigiendo al formulario de registro...");
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>
            <p className="fs-5 mb-0">Iniciar Sesión</p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="text-center">
            <img
              src={logoSazón}
              alt="logo sazón del alma"
              className="img-fluid "
              style={{ width: "200px", height: "auto" }}
            />
          </div>
          <Form onSubmit={handleLogin} className="traditional-login">
            <Form.Group controlId="formBasicEmail" className="my-4">
              <Form.Control
                type="email"
                placeholder="Correo electrónico"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Contraseña" required />
            </Form.Group>
            <div className="mt-3 checkLogin">
              <Form.Check type="checkbox" label="Recordar contraseña" />
            </div>
            <div className="text-center mt-4">
              <Button className="btn botonSesion" type="submit">
                Iniciar sesión
              </Button>
            </div>
            <div className="text-center my-3">
              <a
                href="/olvide-contraseña"
                className="me-5 link-no-underline text-decoration-none linkLoginContraseña"
              >
                Olvidé mi contraseña
              </a>
              <a
                href="/olvide-usuario"
                className="text-decoration-none linkLoginUsuario"
              >
                Olvidé mi usuario
              </a>
            </div>
            <div className="social-login text-center">
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p>¿No tienes una cuenta?</p>
          <a href="/registro" className="text-decoration-none linkRegistrate">
            Regístrate aquí
          </a>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default LoginModal;
