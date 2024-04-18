import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import logo from "../../assets/LogoSazon.png"
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { isRol, logoutBack } from "../../helpers/queris";

const Menu = ({ usuarioLogueado, actualizarUsuario }) => {
    const navegacion = useNavigate()
    const [isAdmin, setIsAdmin] = useState("user")

    const verificarIsAdmin = async () => {
        try {
            if (usuarioLogueado.email !== "") {
                const respuesta = await isRol({ email: usuarioLogueado.email })
                const datos = await respuesta.json(respuesta)
                if (respuesta.status === 200) {
                    setIsAdmin(datos.role)
                } else {
                    localStorage.removeItem('usuarioSazonDelAlma');
                    navegacion("/login");
                    Swal.fire({
                        title: "Ocurrio un error",
                        text: datos.mensaje,
                        icon: "error",
                    });
                }
            } else {
                setIsAdmin("user")
            }
        } catch (error) {
            console.log(error)
            setIsAdmin("user")
        }
    }

    useEffect(() => {
        verificarIsAdmin()
    }, [usuarioLogueado])

    const logout = async () => {
        try {
            const result = await Swal.fire({
                title: "¿Seguro quieres cerrar secion?",
                text: "Luego puedes volver a acceder a tu cuenta",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3e3f3d",
                confirmButtonText: "Cerrar Secion",
                cancelButtonText: "Cancelar",
            });

            if (result.isConfirmed) {
                if (usuarioLogueado.email !== "") {
                    const respuesta = await logoutBack({ email: usuarioLogueado.email });
                    const datos = await respuesta.json()
                    if (respuesta.status === 200) {
                        localStorage.removeItem('usuarioSazonDelAlma');
                        actualizarUsuario();
                        navegacion("/login");
                    } else {
                        Swal.fire({
                            title: "Ocurrio un error",
                            text: datos.mensaje,
                            icon: "error",
                        });
                    }
                } else {
                    localStorage.removeItem('usuarioSazonDelAlma');
                    actualizarUsuario();
                }
                return { success: true };
            } else {
                return null;
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
                            {
                                isAdmin === "admin" ? (
                                    <NavDropdown className=" text-light mt-sm-2 mt-md-3 mt-lg-3 me-3 nav-link dropstart " data-bs-theme="dark" title="Admin" id="navbarScrollingDropdown" data-toggle="dropdown">
                                        <NavDropdown.Item as={Link} to="/administrador/menu">menu</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/administrador/usuario">usuarios</NavDropdown.Item>
                                    </NavDropdown>
                                ) : (<></>)
                            }
                            <Button className="nav-link text-light" variant="danger" onClick={logout}>
                                <i className="bi bi-person-fill-x fs-3 px-2"></i>
                            </Button>
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
