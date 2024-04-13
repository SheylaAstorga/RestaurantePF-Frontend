import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { leerUsuarios } from "../../helpers/queris";
import UsuariosItem from "./UsuariosItem";
import Swal from "sweetalert2";

const UsuariosAdmin = () => {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        hacerSolicitud()
    }, [])

    const hacerSolicitud = async () => {
        const respuesta = await leerUsuarios();
        console.log(respuesta)
        setUsuarios(respuesta)
    }

    const borrarUsuario = async (email) => {
        Swal.fire({
            title: "¿Seguro quieres borrarlo?",
            text: "el usuario se eliminaria permanentemente",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3e3f3d",
            confirmButtonText: "borrar",
            cancelButtonText: "cancelar"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Usuario Borrado",
                text: `el usuario ${email} a sido borrado`,
                icon: "success"
              });
            }
          });
    }

    const suspenderUsuario = async (email) => {
      Swal.fire({
        title: "¿Seguro quieres suspender el usuario?",
        text: "el usuario no podra hacer ninguna accion al menos que lo habilites",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3e3f3d",
        confirmButtonText: "suspender",
        cancelButtonText: "cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Usuario Suspendido",
            text: `el usuario ${email} a sido suspendido`,
            icon: "success"
          });
        }
      });
    }

    const habilitarUsuario = async (email) => {
        Swal.fire({
          title: "¿Seguro quieres habilitar el usuario?",
          text: "el usuario podra hacer pedidos y demas opciones otra ves",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#4baf23",
          cancelButtonColor: "#3e3f3d",
          confirmButtonText: "habilitar",
          cancelButtonText: "cancelar"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Usuario Habilitado",
              text: `el usuario ${email} a sido habilitado`,
              icon: "success"
            });
          }
        });

    }
    return (
        <Container className="my-3">
            <h2 className="text-center">Administrar Usuario</h2>
            <div className="d-flex justify-content-between align-content-center">
                <p className="fs-2 m-0">Lista de Usuario</p>
                <Link className="m-0 text-decoration-none btn btn-primary text-center" to={"/administrador/menu"}>
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