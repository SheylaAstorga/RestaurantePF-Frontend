import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import logoSazón from "../../src/img/LogoSazon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { login } from "../helpers/queris";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


const LoginModal = ({ actualizarUsuario }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const contraseña = watch("password");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navegacion = useNavigate();
  const usuarioValidado = async (usuario) => {
    try {
      const respuesta = await login(usuario);
      const datos = await respuesta.json();
      if (respuesta.status === 200) {
        localStorage.removeItem("usuarioSazonDelAlma");
        localStorage.setItem(
          "usuarioSazonDelAlma",
          JSON.stringify({
            email: datos.email,
            token: datos.token,
          })
        );
        actualizarUsuario();
        Swal.fire({
          title: "Bienvenido de vuelta",
          text: datos.mensaje,
          icon: "success",
        });
        reset();
        navegacion("/");
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: datos.mensaje,
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Ocurrio un error",
        text: "ocurrio un error inesperado, intente esta operacion mas tarde",
        icon: "error",
      });
    }
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
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                    message: "Debe ingresar un email valido",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña:</Form.Label>
              <div className="d-flex justify-content-between">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingrese una contraseña"
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                      message:
                        "La contraseña debe contener por lo menos 8 caracteres, letras tanto minúsculas y mayúsculas y números",
                    },
                  })}
                />
                <div
                  variant="outline-dark"
                  onClick={togglePasswordVisibility}
                  className="mt-2 ms-2"
                >
                  <i
                    className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}`}
                  ></i>
                </div>
              </div>
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
          <Link to="/registro" className="text-decoration-none linkRegistrate">
            Regístrate aquí
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default LoginModal;
