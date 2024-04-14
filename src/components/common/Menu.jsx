import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../assets/LogoSazon.png";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const usuario = sessionStorage.getItem("usuarioSazonDelAlma") || [];
  const logout = () => {
    sessionStorage.removeItem("usuarioSazonDelAlma");
    setUsuarioLogueado("");
    navegacion("/");
  };
  return (
    <Navbar expand="lg" className="NavFondo" variant="dark">
      <div className="container contenedor-navbar">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-white"
        />
        <Navbar.Brand
          className="m-0 d-flex justify-content-center logo-brand order-lg-4 flex-grow-1"
          as={Link}
          to="/"
        >
          <img src={logo} alt="logo" className="text-light logoNav" />
        </Navbar.Brand>
        <div className="d-flex order-lg-5 flex-grow-0 botones-seciones justify-content-end">
          {usuarioLogueado !== "" ? (
            <>
              <Button
                className="nav-link text-light"
                variant="danger"
                onClick={logout}
              >
                <i className="bi bi-person-fill-x fs-3 px-2"></i>
              </Button>
            </>
          ) : (
            <>
              <NavLink
                end
                className="nav-link text-light btn colorBoton2 me-2"
                to="/registro"
                title="Registrar"
              >
                <i className="bi bi-person-fill-add fs-3 px-2 "></i>
              </NavLink>
              <NavLink
                end
                className="nav-link text-light btn colorBoton1"
                to="/login"
                title="Iniciar Secion"
              >
                <i className="bi bi-person-fill fs-3 px-2"></i>
              </NavLink>
            </>
          )}
        </div>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="order-lg-3 links-nav flex-grow-0"
        >
          <Nav className="me-auto">
            <NavLink end className="nav-link footerTitulos" to="/">
              <i className="bi bi-house"></i> Inicio
            </NavLink>
            <NavLink end className="nav-link footerTitulos" to="/nosotros">
              <i className="bi bi-people-fill"></i> Nosotros
            </NavLink>
            <NavLink end className="nav-link footerTitulos" to="/pedido">
              <i className="bi bi-cart"></i> Mis pedidos
            </NavLink>
            {usuario.rol === "admin" ? (
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <></>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Menu;
