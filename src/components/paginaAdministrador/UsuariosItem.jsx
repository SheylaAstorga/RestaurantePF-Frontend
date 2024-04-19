import { Button } from "react-bootstrap";
import "../../style/usuarios.css";

const UsuariosItem = ({
  usuario,
  borrarUsuario,
  suspenderUsuario,
  habilitarUsuario,
  usuarioLogueado
}) => {
  const emailRespuesta = {
    email: usuario.email,
  };
  const estiloColor = {
    backgroundColor: usuario.perfilRGB,
    margin: "auto",
  };
  const isSuspendido = usuario.suspendido ? (
    <Button
      className="ms-lg-3 ms-md-3 mt-2"
      onClick={() => habilitarUsuario(emailRespuesta)}
      variant="warning"
    >
      <i className="bi bi-ban"></i> habilitar
    </Button>
  ) : (
    <Button
      className="ms-lg-3 ms-md-3 mt-2"
      onClick={() => suspenderUsuario(emailRespuesta)}
      variant="info"
    >
      <i className="bi bi-ban"></i> Suspender
    </Button>
  );

  const estiloActivo = {
    backgroundColor: usuario.isActive ? "#4baf23" : "#3e3f3d",
  };
  const activo = usuario.isActive ? "activo" : "inactivo";

  return (
    <div className="d-flex w-100 border border-black mb-4 py-4 containerUsuario">
      <div className="ms-4 w-lg-25 w-sm-100 w-md-25">
        <div
          className="usuarioIsActivo rounded-circle position-absolute"
          title={activo}
          style={estiloActivo}
        ></div>
        <div
          className="usuarioPerfil rounded-circle position-relative"
          style={estiloColor}
        ></div>
      </div>
      <div className="ps-4 w-lg-75 w-sm-100 w-md-75 flex-grow-1 pe-2">
        <div className="d-flex">
          <h4 className="m-0">{usuario.nombreUsuario}</h4>
          {usuario.suspendido ? (
            <p className="text-danger mt-2 mb-0 ms-2">
              <b>Usuario suspendido</b>
            </p>
          ) : (
            <></>
          )}
        </div>
        <p className="email">{usuario.email}</p>
        <hr />
        {
          usuarioLogueado.email !== usuario.email ? (
            <div className="d-flex botonesUsuario">
              <Button
                onClick={() => borrarUsuario(emailRespuesta)}
                className="mt-2"
                variant="danger"
              >
                <i className="bi bi-trash3"></i> Borrar
              </Button>
              {isSuspendido}
            </div>
          ) : (<></>)
        }
      </div>
    </div>
  );
};

export default UsuariosItem;
