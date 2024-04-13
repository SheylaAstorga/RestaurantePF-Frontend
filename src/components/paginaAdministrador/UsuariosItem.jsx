import { Button } from "react-bootstrap";
import "../../style/usuarios.css"

const UsuariosItem = ({ usuario }) => {
    const estiloColor = {
        backgroundColor: usuario.perfilRGB,
        margin: "auto",
    };

    const estiloActivo = {
        backgroundColor: usuario.isActive ? "#4baf23" : "#3e3f3d"
    };
    const activo = usuario.isActive ? "activo" : "inactivo"

    return (
        <div className='d-flex w-100 border border-black mb-4 py-4'>
            <div className="ms-4 w-25">
                <div className="usuarioIsActivo rounded-circle position-absolute" title={activo} style={estiloActivo}></div>
                <div className='usuarioPerfil rounded-circle position-relative' style={estiloColor}></div>
            </div>
            <div className='w-75 ps-4'>
                <div className="d-flex">
                    <h4 className="m-0">{usuario.nombreUsuario}</h4>
                    {usuario.suspendido ? (<p className="text-danger mt-2 mb-0 ms-2"><b>Usuario suspendido</b></p>) : (<></>)}
                </div>
                <p>{usuario.email}</p>
                <hr />
                <div className="d-flex botonesUsuario">
                    <Button variant="danger"><i className="bi bi-trash3"></i> Borrar</Button>
                    <Button className="ms-lg-3 ms-md-3" variant="info"><i className="bi bi-ban"></i> Suspender</Button>
                </div>
            </div>
        </div>
    );
};

export default UsuariosItem;