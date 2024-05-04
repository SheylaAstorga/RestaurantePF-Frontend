import logoSazón from "../../src/img/LogoSazon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearUsuario } from "../helpers/queris";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";

const RegistroModal = ({ actualizarUsuario }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const contraseña = watch("password");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const handleCheckboxChange = (event) => {
    setShowModal(event.target.checked);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const navegacion = useNavigate();
  const password = watch("password", "");

  const generarColorRandom = () => {
    return `rgb(${Math.floor(Math.random() * 251)},${Math.floor(
      Math.random() * 251
    )},${Math.floor(Math.random() * 251)})`;
  };

  const usuarioValidadoRegistro = async (usuarioValidado) => {
    try {
      const usuario = {
        email: usuarioValidado.email,
        password: usuarioValidado.password,
        nombreUsuario: usuarioValidado.nombreUsuario,
        perfilRGB: generarColorRandom()
      }
      const respuesta = await crearUsuario(usuario);
      const datos = await respuesta.json();
      if (respuesta.status === 201) {
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
          title: "Bienvenido",
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
      Swal.fire({
        title: "Ocurrio un error",
        text: "a ocurrido un error inesperado, intententelo mas tarde",
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
          <Form onSubmit={handleSubmit(usuarioValidadoRegistro)}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                {...register("nombreUsuario", {
                  required: "El nombre es obligatorio",
                  minLength: {
                    value: 4,
                    message:
                      "El nombre del usuario debe tener como minimo 4 caracteres",
                  },
                  maxLength: {
                    value: 15,
                    message:
                      "El nombre del usuario debe tener como maximo 25 caracteres",
                  },
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message: "el usuario solo debe contener letras y espacios",
                  }
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreUsuario?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="correo@correo.com"
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
            <Form.Group className="mb-3">
              <Form.Label>Repita la contraseña*</Form.Label>
              <div className="d-flex justify-content-between">
                <Form.Control
                  type={showRepeatPassword ? "text" : "password"}
                  placeholder="Repita su contraseña"
                  {...register("password_repeat", {
                    required: "Debe repetir la contraseña",
                    validate: (value) =>
                      value === password || "Las contraseñas no coinciden",
                  })}
                />
                <div
                  variant="outline-dark"
                  onClick={toggleRepeatPasswordVisibility}
                  className="mt-2 ms-2"
                >
                  <i
                    className={`bi ${showRepeatPassword ? "bi-eye" : "bi-eye-slash"}`}
                  ></i>
                </div>
              </div>
              <Form.Text className="text-danger">
                {errors.password_repeat?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {showModal && (
                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Términos y Condiciones de Sazón del Alma
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      Al utilizar los servicios de nuestro restaurante, usted
                      acepta los siguientes términos y condiciones. Por favor,
                      léalos cuidadosamente.
                      <li>
                        1. General Sazón del Alma ofrece este servicio sujeto a
                        los términos y condiciones aquí establecidos. Al acceder
                        a nuestro restaurante o utilizar nuestros servicios,
                        usted acepta estar vinculado por estas condiciones.
                      </li>
                      <li>
                        2. Reservas Las reservas pueden realizarse en línea a
                        través de nuestra página web, por teléfono o en persona
                        en nuestro establecimiento. Las reservas deben
                        confirmarse al menos 24 horas antes del horario
                        previsto. Cualquier cancelación debe ser notificada con
                        al menos 12 horas de anticipación para evitar cargos. 3.
                        Política de consumo No está permitido introducir bebidas
                        o alimentos de fuera en las instalaciones. Todo alimento
                        y bebida comprados en el restaurante deben consumirse
                        dentro de las instalaciones.
                      </li>
                      <li>
                        4. Conducta del cliente Los clientes deben mantener un
                        comportamiento adecuado y respetuoso en todo momento.
                        Sazón del Alma se reserva el derecho de rechazar el
                        servicio o expulsar a clientes que no respeten estas
                        normas de conducta.
                      </li>
                      <li>
                        5. Política de pago Aceptamos efectivo, tarjetas de
                        crédito y débito como formas de pago. El pago se realiza
                        al finalizar el consumo, antes de dejar el
                        establecimiento.
                      </li>
                      <li>
                        6. Política de reembolso En caso de insatisfacción con
                        algún plato servido, el cliente debe comunicarlo de
                        inmediato para su revisión y posible sustitución. No se
                        realizan reembolsos una vez que los alimentos o bebidas
                        han sido consumidos parcial o totalmente.
                      </li>
                      <li>
                        7.Modificaciones de los Términos Sazón del Alma se
                        reserva el derecho de modificar estos términos y
                        condiciones en cualquier momento. Dichas modificaciones
                        serán efectivas inmediatamente después de su publicación
                        en nuestro sitio web o en el restaurante.
                      </li>
                      <li>
                        8. Contacto Para cualquier consulta o comentario
                        respecto a estos términos y condiciones, por favor
                        contáctenos a través de nuestra página web o llame
                        directamente al restaurante.
                      </li>
                    </p>
                  </Modal.Body>
                </Modal>
              )}
              <Form.Check
                type="checkbox"
                label="Acepto los términos y condiciones"
                required
                onChange={handleCheckboxChange}
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
            <Link
              to="/error404"
              className="btn btn-outline-primary social-button me-3 my-2 w-25"
            >
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            </Link>
            <Link to="/error404" className="btn btn-outline-danger social-button w-25">
              <FontAwesomeIcon icon={faGoogle} className="social-icon" />
            </Link>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/login" className="text-decoration-none linkRegistrate">
            Inicia seción aquí
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default RegistroModal;
