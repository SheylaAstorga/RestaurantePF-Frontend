import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarUsuarios, habilitarUsuarios, leerUsuarios, suspenderUsuarios } from "../../helpers/queris";
import UsuariosItem from "./UsuariosItem";
import Swal from "sweetalert2";
import "../../style/spin.css"

const UsuariosAdmin = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [mostrarComponente, setMostrarComponente] = useState(false)
    useEffect(() => {
        hacerSolicitud()
    }, [])

    const componente = (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <svg className="sp" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#000" />
                    <stop offset="40%" stopColor="#fff" />
                    <stop offset="100%" stopColor="#fff" />
                </linearGradient>
                <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#000" />
                    <stop offset="60%" stopColor="#000" />
                    <stop offset="100%" stopColor="#fff" />
                </linearGradient>
                <mask id="mask1">
                    <rect x="0" y="0" width="128" height="128" fill="url(#grad1)" />
                </mask>
                <mask id="mask2">
                    <rect x="0" y="0" width="128" height="128" fill="url(#grad2)" />
                </mask>
            </defs>
            <g fill="none" strokeLinecap="round" strokeWidth="16">
                <circle className="sp__ring" r="56" cx="64" cy="64" stroke="#ddd" />
                <g stroke="hsl(223,90%,50%)">
                    <path className="sp__worm1" d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64" stroke="hsl(343,90%,50%)" strokeDasharray="43.98 307.87" />
                    <g transform="translate(42,42)">
                        <g className="sp__worm2" transform="translate(-42,0)">
                            <path className="sp__worm2-1" d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14" strokeDasharray="43.98 175.92" />
                        </g>
                    </g>
                </g>
                <g stroke="hsl(283,90%,50%)" mask="url(#mask1)">
                    <path className="sp__worm1" d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64" strokeDasharray="43.98 307.87" />
                    <g transform="translate(42,42)">
                        <g className="sp__worm2" transform="translate(-42,0)">
                            <path className="sp__worm2-1" d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14" strokeDasharray="43.98 175.92" />
                        </g>
                    </g>
                </g>
                <g stroke="hsl(343,90%,50%)" mask="url(#mask2)">
                    <path className="sp__worm1" d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64" strokeDasharray="43.98 307.87" />
                    <g transform="translate(42,42)">
                        <g className="sp__worm2" transform="translate(-42,0)">
                            <path className="sp__worm2-1" d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14" strokeDasharray="43.98 175.92" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    </div>
    )

    const hacerSolicitud = async () => {
        setMostrarComponente(false)
        try {
            const respuesta = await leerUsuarios();
            setUsuarios(respuesta)
        } catch (error) {
            Swal.fire({
                title: "Ocurrio un error",
                text: "a ocurrido un error inesperado",
                icon: "error"
            });
        }
        setMostrarComponente(true)
    }
    const borrarUsuario = async (email) => {
        const result = await Swal.fire({
            title: "¿Seguro quieres borrarlo?",
            text: "El usuario se eliminaría permanentemente.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3e3f3d",
            confirmButtonText: "Borrar",
            cancelButtonText: "Cancelar"
        });

        if (result.isConfirmed) {
            const resultado = await borrarUsuarios(email);
            if (!resultado) {
                Swal.fire({
                    title: "Ocurrio un error",
                    text: resultado.mensaje,
                    icon: "error"
                });
            } else {
                hacerSolicitud()
                Swal.fire({
                    title: "Usuario Borrado",
                    text: resultado.mensaje,
                    icon: "success"
                });
            }
            return { success: true };
        } else {
            return null;
        }
    };


    const suspenderUsuario = async (email) => {
        const result = await Swal.fire({
            title: "¿Seguro quieres suspender el usuario?",
            text: "el usuario no podra hacer ninguna accion al menos que lo habilites",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3e3f3d",
            confirmButtonText: "suspender",
            cancelButtonText: "cancelar"
        })

        if (result.isConfirmed) {
            const resultado = await suspenderUsuarios(email);
            if (!resultado) {
                Swal.fire({
                    title: "Ocurrio un error",
                    text: resultado.mensaje,
                    icon: "error"
                });
            } else {
                hacerSolicitud()
                Swal.fire({
                    title: "Usuario Suspendido",
                    text: resultado.mensaje,
                    icon: "success"
                })
            }
            return { success: true };
        } else {
            return null;
        }

    }

    const habilitarUsuario = async (email) => {
        const result = await Swal.fire({
            title: "¿Seguro quieres habilitar el usuario?",
            text: "el usuario podra hacer pedidos y demas opciones otra ves",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#4baf23",
            cancelButtonColor: "#3e3f3d",
            confirmButtonText: "habilitar",
            cancelButtonText: "cancelar"
        })

        if (result.isConfirmed) {
            const resultado = await habilitarUsuarios(email);
            if (!resultado) {
                Swal.fire({
                    title: "Ocurrio un error",
                    text: resultado.mensaje,
                    icon: "error"
                });
            } else {
                hacerSolicitud()
                Swal.fire({
                    title: "Usuario habilitado",
                    text: resultado.mensaje,
                    icon: "success"
                })
            }
            return { success: true };
        } else {
            return null;
        }
    };

    return (
        <Container className="my-3">
            {
                mostrarComponente ? (<>
                    <h2 className="text-center">Administrar Usuario</h2>
                    <div className="d-flex justify-content-between align-content-center">
                        <p className="fs-2 m-0">Lista de Usuario</p>
                        <Link className="m-0 text-decoration-none btn btn-primary text-center" to={"/administrador/usuario/crear"}>
                            Nuevo Usuario
                        </Link>
                    </div>
                    {
                        usuarios.length === 0 ? (<p className="my-3 text-center">No se encontraron usuarios</p>) : (
                            <div className="my-3">
                                {usuarios.map((usuario, posicion) =>
                                    <UsuariosItem
                                        borrarUsuario={borrarUsuario}
                                        habilitarUsuario={habilitarUsuario}
                                        suspenderUsuario={suspenderUsuario}
                                        usuario={usuario}
                                        key={posicion}></UsuariosItem>)}
                            </div>
                        )
                    }</>) : (componente)
            }
        </Container>
    );
};

export default UsuariosAdmin;