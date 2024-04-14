import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import logo from "../../assets/LogoSazon.png"
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { logoutBack } from "../../helpers/queris";

const Menu = ({ usuarioLogueado, setUsuarioLogueado , actualizarUsuario}) => {
    const navegacion = useNavigate()
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(()=> {
        const estado = verificarIsAdmin();
        setIsAdmin(estado)
    },[])

    const verificarIsAdmin = async () => {
        return false
    }

    const logout = async () => {
        try {
            const respuesta = await logoutBack({ email: usuarioLogueado.email});
            const datos = await respuesta.json()
            if (respuesta.status === 200) {
                if (respuesta.status === 200) {
                    localStorage.removeItem('usuarioSazonDelAlma');
                    actualizarUsuario();
                    navegacion("/login");
                }
            } else {
                Swal.fire({
                    title: "Ocurrio un error",
                    text: datos.mensaje,
                    icon: "error",
                });
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: "Ocurrio un error",
                text: "ocurrio un error inesperado, intente esta operacion mas tarde",
                icon: "error",
            });
        }
    };
    return (
        <Navbar expand="lg" className="NavFondo" variant="dark">
            <div className="container contenedor-navbar">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" />
                <Navbar.Brand className="m-0 d-flex justify-content-center logo-brand order-lg-4 flex-grow-1" as={Link} to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className="text-light logoNav"
                    />
                </Navbar.Brand>
                <div className="d-flex order-lg-5 flex-grow-0 botones-seciones justify-content-end">
                    {usuarioLogueado.email !== "" ? (
                        <>
                            <Button className="nav-link text-light" variant="danger" onClick={logout}>
                                <i className="bi bi-person-fill-x fs-3 px-2"></i>
                            </Button>
                            {
                            isAdmin ? (
                                <NavDropdown title="Administrador" id="navbarScrollingDropdown">
                                    <NavDropdown.Item>Action</NavDropdown.Item>
                                    <NavDropdown.Item>
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (<></>)
                        }
                        </>
                    ) : (
                        <>
                            <NavLink end className="nav-link text-light btn colorBoton2 me-2" to="/registro" title="Registrar">
                                <i className="bi bi-person-fill-add fs-3 px-2 "></i>
                            </NavLink>
                            <NavLink end className="nav-link text-light btn colorBoton1" to="/login" title="Iniciar Secion">
                                <i className="bi bi-person-fill fs-3 px-2"></i>
                            </NavLink>
                        </>
                    )}
                </div>
                <Navbar.Collapse id="basic-navbar-nav" className="order-lg-3 links-nav flex-grow-0">
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
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Menu;