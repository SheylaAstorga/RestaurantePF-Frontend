import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import logoSazón from "../../src/img/LogoSazon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";

const LoginModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const usuarioValidado = (usuario) => {
    reset();
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
          <Form
            className="traditional-login"
            onSubmit={handleSubmit(usuarioValidado)}
          >
            <Form.Group controlId="formBasicEmail" className="my-4">
              <Form.Control
                type="email"
                placeholder="Correo electrónico"
                {...register("email", {
                  required: "El email es obligatorio",
                  minLength: {
                    value: 12,
                    message:
                      "El email del usuario debe tener como minimo 12 caracteres",
                  },
                  maxLength: {
                    value: 256,
                    message:
                      "El email del usuario debe tener como maximo 256 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 8,
                    message:
                      "La contraseña del usuario debe tener como minimo 8 caracteres",
                  },
                  maxLength: {
                    value: 16,
                    message:
                      "La contraseña del usuario debe tener como maximo 16 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
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
                className=" link-no-underline text-decoration-none linkLoginContraseña"
              >
                Olvidé mi contraseña
              </a>
            </div>
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
