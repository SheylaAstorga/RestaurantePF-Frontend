import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { leerUsuarios } from "../../helpers/queris";
import UsuariosItem from "./UsuariosItem";

const UsuariosAdmin = () => {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(()=> {
        hacerSolicitud()
    },[])

    const hacerSolicitud = async() => {
        const respuesta = await leerUsuarios();
        console.log(respuesta)
        setUsuarios(respuesta)
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
                        {usuarios.map((usuario, posicion) => <UsuariosItem usuario={usuario} key={posicion}></UsuariosItem>)}
                    </div>
                )
            }
        </Container>
    );
};

export default UsuariosAdmin;