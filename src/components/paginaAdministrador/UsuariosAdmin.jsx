import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarUsuarios, habilitarUsuarios, leerUsuarios, suspenderUsuarios } from "../../helpers/queris";
import UsuariosItem from "./UsuariosItem";
import Swal from "sweetalert2";

const UsuariosAdmin = () => {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        hacerSolicitud()
    }, [])

    const hacerSolicitud = async () => {
        const respuesta = await leerUsuarios();
        setUsuarios(respuesta)
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
            <h2 className="text-center">Administrar Usuario</h2>
            <div className="d-flex justify-content-between align-content-center">
                <p className="fs-2 m-0">Lista de Usuario</p>
                <Link className="m-0 text-decoration-none btn btn-primary text-center" to={"/administrador/usuarios/crear"}>
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
            }
        </Container>
    );
};

export default UsuariosAdmin;