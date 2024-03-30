import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
    const navegacion = useNavigate()
    const logout = () => {
        sessionStorage.removeItem("usuarioSazonDelAlma");
        setUsuarioLogueado("");
        navegacion("/");
    };
    return (
        <Navbar expand="lg" className="NavFondo">
            <Container className="d-flex justify-content-between">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="">
                        <NavLink end className="nav-link text-light" to="/">
                            Inicio
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src=""
                        alt="[Texto alternativo del logo]"
                        className="img-fluid text-light"
                    />
                </Navbar.Brand>
                {usuarioLogueado !== "" ? (
                    <>
                        <NavLink end className="nav-link text-light" to="/administrador">
                            Administrador
                        </NavLink>
                        <Button className="nav-link text-light" variant="danger" onClick={logout}>
                            logout
                        </Button>
                    </>
                ) : (
                    <>
                        <NavLink end className="nav-link text-light btn colorBoton2 me-1" to="/registro">
                            <i className="bi bi-person-fill-add fs-3 px-2"></i>
                        </NavLink>
                        <NavLink end className="nav-link text-light btn colorBoton1" to="/login">
                            <i className="bi bi-person-fill fs-3 px-2"></i>
                        </NavLink>
                    </>
                )}
            </Container>
        </Navbar>
    );
};

export default Menu;