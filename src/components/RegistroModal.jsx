import logoSazón from "../../src/img/LogoSazon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearUsuario } from "../helpers/queris";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const RegistroModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();
  const navegacion = useNavigate()
  const password = watch("password", "");

  const generarColorRandom = () => {
    return `rgb(${Math.floor(Math.random() * 251)},${Math.floor(Math.random() * 251)},${Math.floor(Math.random() * 251)})`
  }

  const usuarioValidadoRegistro = async (usuarioValidado) => {
    try {
      const usuario = {
        email: usuarioValidado.email,
        password: usuarioValidado.password,
        nombreUsuario: usuarioValidado.nombreUsuario,
        rol: usuarioValidado.rol,
        perfilRGB: generarColorRandom()
      }
      const respuesta = await crearUsuario(usuario);
      const datos = await respuesta.json()
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Usuario creado",
          text: `El usuario "${usuario.nombreUsuario}" fue creado correctamente`,
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
        icon: "error"
      });
    }
  }
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
            <Form.Group
              className="mb-3"
            >
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
                      value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                      message: "Debe ingresar un email valido",
                  }
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese una contraseña"
                {...register('password', {
                  required: "La contraseña es obligatoria",
                  pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                      message: "La contraseña debe contener por lo menos 8 caracteres, letras tanto minúsculas y mayúsculas y números",
                  }
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Repita la contraseña*</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repita su contraseña"
                {...register("password_repeat", {
                  required: "Debe repetir la contraseña",
                  validate: value => value === password || "Las contraseñas no coinciden"
                })}
              />
              <Form.Text className="text-danger">
                {errors.password_repeat?.message}
              </Form.Text>
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
          <a href="/login" className="text-decoration-none linkRegistrate">
            Inicia seción aquí
          </a>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default RegistroModal;
