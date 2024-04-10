import Button from 'react-bootstrap/Button';
import ModalDetalles from "./ModalDetalles";
import { useState } from "react";

const CardDestacada = ({ producto}) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="card d-flex flex-md-row cambio-card-sm my-3 shadow contenedor-card" >
        <div className='contenedor-img-recomendada' >
        <img src={producto.imagen} className=" card-img-dest" alt="..." />
        </div>
        <div className="card-body card-body-tamanio ">
          <h2 className=" text-center">
            {producto.nombre}
          </h2>
          <h5 className=" text-center text-black">${producto.precio}</h5>
          <p>apto: {producto.categoria} </p>
          <div className="d-flex justify-content-center "> 
          <Button variant="outline-dark" className='w-25 mx-2 my-2' onClick={() => setModalShow(true)}><i className="bi bi-info-circle"></i></Button>
          <Button variant="outline-dark" className='w-25 mx-2 my-2'><i className="bi bi-bag-heart"></i></Button> 
          </div>
        </div>
      </div>
      <ModalDetalles show={modalShow} producto={producto}
              onHide={() => setModalShow(false)}></ModalDetalles>
    </>
  );
};

export default CardDestacada;
