import Swal from 'sweetalert2';
import { useState } from "react";
import { borrarPlatoAPI, leerProductosAPI } from "../../helpers/queris";
import ModalDetalles from '../paginaPrincipal/ModalDetalles';
import { Link } from 'react-router-dom';

const ElementoLista = ({ producto,setPlatillos }) => {
  const [modalShow, setModalShow] = useState(false);


  const eliminarPlato = () => {
    Swal.fire({
      title: "Estas seguro",
      text: "no podras revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡eliminar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const estatus = await borrarPlatoAPI(producto._id);
        if (estatus.status === 200) {
          Swal.fire({
            title: "eliminado",
            text: `${producto.nombre} fue eliminado`,
            icon: "success",
          });
         const listaActual = await leerProductosAPI();
         setPlatillos(listaActual);
        } else {
          Swal.fire({
            title: "error",
            text: `${producto.nombre} no pudo eliminarse`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <li className="list-group-item w-100 container glass-efect ">
      <div className="row">
        <div className="col-12 col-lg-3 align-items-center justify-content-center d-flex">
          <img src={producto.imagen} alt="" className="img-thumbnail w-75" />
        </div>
        <div className="col-12 col-lg-6 pt-3">
          <div className=" d-flex justify-content-between">
            <h5>{producto.nombre}</h5>
            <h6>${producto.precio}</h6>
          </div>
          <hr className="border border-dark border-1 opacity-50"></hr>

          <p>{producto.detalle.substr(0, 50)}...</p>
        </div>
        <div className="col-12 col-lg-3 justify-content-center align-content-center d-flex flex-wrap">
          <button
            type="button"
            className="btn btn-outline-dark mx-1 "
            onClick={() => setModalShow(true)}
          >
            <i className="bi bi-file-text"></i>
          </button>
          <Link type="button" className="btn btn-outline-success mx-1" to={"/administrador/editar/"+producto._id}>
            <i className="bi bi-pencil-square"></i>
          </Link>
          <button
            type="button"
            className="btn btn-outline-danger mx-1"
            onClick={eliminarPlato}
          >
            <i className="bi bi-trash"></i>
          </button>
          
        </div>
      </div>
      <ModalDetalles show={modalShow} producto={producto}
              onHide={() => setModalShow(false)}></ModalDetalles>
    </li>
  );
};

export default ElementoLista;
 