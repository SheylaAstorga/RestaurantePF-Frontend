import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import imagenlogin from "../../src/img/imagen-login.jpeg";

const LoginModal = () => {
  const handleLogin = () => {
    // Lógica para manejar el inicio de sesión
    console.log("Iniciando sesión...");
  };

  const handleRegister = () => {
    // Lógica para manejar el registro
    console.log("Redirigiendo al formulario de registro...");
  };

  return (
    <Container className="container-Login mt-5">
      <section
        className="welcome-section text-center"
        style={{ backgroundImage: `url(${imagenlogin})` }}
      >
        <div className="overlay"></div>
        <div className="content">
          <h2 className="text-light fs-1 mb-4">Bienvenido</h2>
          <p>"¡Bienvenido a Sazón del Alma! Disfruta de una experiencia culinaria auténtica y llena de sabor. ¡Inicia sesión para explorar nuestro menú y descubrir los sabores del alma!"</p>
          <p className="text-light mb-4">
            ¡Inicia sesión o regístrate para acceder!
          </p>
          <Button variant="primary" onClick={handleRegister}>
            Registrarse
          </Button>
        </div>
      </section>
      {/* Formulario de inicio de sesión */}
      <section className="login-section">
        {/* Botones de inicio de sesión con redes sociales */}
        <div className="social-login">
          <Button variant="outline-primary" className="social-button">
            Iniciar sesión con Facebook
          </Button>
          <Button variant="outline-danger" className="social-button">
            Iniciar sesión con Google
          </Button>
        </div>
        {/* Formulario de inicio de sesión tradicional */}
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Correo electrónico"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Contraseña" required />
          </Form.Group>
          <Button variant="success" type="submit">
            Iniciar sesión
          </Button>
        </Form>
      </section>
    </Container>
  );
};

export default LoginModal;
