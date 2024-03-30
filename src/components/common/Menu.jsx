import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../../assets/LogoSazon.png"

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
    const navegacion = useNavigate()

    const logout = () => {
        sessionStorage.removeItem("usuarioSazonDelAlma");
        setUsuarioLogueado("");
        navegacion("/");
    };
    // modificar el como se centran los elementos haciendo que el boton hamburguesa a la izquierda , el logo en el centro y el iniciar secion y registrar al final
    return (
        <Navbar expand="lg" className="NavFondo">
            <Container className="d-flex justify-content-between align-items-center">
                {/* cambiar de color a el boton hamburgesa */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* modificar todas las rutas cuando este terminado el frontend */}
                    <Nav className="">
                        <NavLink end className="nav-link text-light" to="/">
                            <i className="bi bi-house"></i> Inicio
                        </NavLink>
                        <NavLink end className="nav-link text-light" to="/">
                            <i className="bi bi-people-fill"></i> Nosotros
                        </NavLink>
                        <NavLink end className="nav-link text-light" to="/">
                            <i className="bi bi-cart"></i> Mis pedidos
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand className="m-0" as={Link} to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className="text-light w-25"
                    />
                </Navbar.Brand>
                {usuarioLogueado !== "" ? (
                    <>
                        <NavLink end className="nav-link text-light" to="/administrador">
                            Administrador
                        </NavLink>
                        <Button className="nav-link text-light" variant="danger" onClick={logout}>
                            <i className="bi bi-person-fill-x fs-3 px-2"></i>
                        </Button>
                    </>
                ) : (
                    <>
                        <NavLink end className="nav-link text-light btn colorBoton2 me-1" to="/registro" title="Registrar">
                            <i className="bi bi-person-fill-add fs-3 px-2"></i>
                        </NavLink>
                        <NavLink end className="nav-link text-light btn colorBoton1" to="/login" title="Iniciar Secion">
                            <i className="bi bi-person-fill fs-3 px-2"></i>
                        </NavLink>
                    </>
                )}
            </Container>
        </Navbar>
    );
};

export default Menu;