import Button from 'react-bootstrap/Button';
import ModalDetalles from "./ModalDetalles";
import { useState } from "react";
import { Link } from 'react-router-dom';

const CardDestacada = ({ producto}) => {
 

  return (
    <>
      <div className="card d-flex flex-md-row cambio-card-sm my-3 shadow contenedor-card" >
        <div className='contenedor-img-recomendada' >
        <img src={producto.imagen} className="card-img-dest" alt="imagenes menus" />
        </div>
        <div className="card-body card-body-tamanio mt-lg-5 mt-md-5">
          <h2 className=" text-center">
            {producto.nombre}
          </h2>
          <h5 className=" text-center text-black">${producto.precio}</h5>
          <p>apto: {producto.categoria} </p>
          <div className="d-flex justify-content-center "> 
          <Link  className='btn btn-outline-dark w-75 mx-2 my-2' to={`/detalleProducto/${producto._id}`}><i className="bi bi-info-circle fs-4"></i></Link>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDestacada;
