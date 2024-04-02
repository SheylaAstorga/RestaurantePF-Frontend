import logoSazón from "../../src/img/LogoSazon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const RegistroModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const usuarioValidadoRegistro = (usuario) => {
    console.log(usuario);
    reset()
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
            <Form.Group
              className="mb-3"
            >
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                {...register("Nombre", {
                  required: "El nombre es obligatorio",
                  minLength: {
                    value: 4,
                    message:
                      "El nombre del usuario debe tener como minimo 4 caracteres",
                  },
                  maxLength: {
                    value: 25,
                    message:
                      "El nombre del usuario debe tener como maximo 25 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.Nombre?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="correo@correo.com"
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
            <Form.Group className="mb-3">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese una contraseña"
                {...register('password',{
                  required:"La contraseña es obligatoria",
                  minLength:{
                    value:8,
                    message:"La contraseña del usuario debe tener como minimo 8 caracteres"
                  },
                  maxLength:{
                    value:16,
                    message:"La contraseña del usuario debe tener como maximo 16 caracteres"
                  }
                })}
              />
               <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirmar contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese nuevamente su contraseña"
                {...register('password',{
                  required:"Ingrese su contraseña",
                  minLength:{
                    value:8,
                    message:"Ingrese nuevamente la contraseña, debe tener como minimo 8 caracteres"
                  },
                  maxLength:{
                    value:16,
                    message:"Ingrese nuevamente la contraseña, debe tener como maximo 16 caracteres"
                  }
                })}
              />
               <Form.Text className="text-danger">
                {errors.password?.message}
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
          <a href="/registro" className="text-decoration-none linkRegistrate">
            Inicia sessión aquí
          </a>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default RegistroModal;
