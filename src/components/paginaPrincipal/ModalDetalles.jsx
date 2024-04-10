import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDetalles = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="d-flex contenedor-modal fondo rounded-2 shadow-lg">

      <div className="justify-content-center align-content-center fondo-img-modal">
        <img src={props.producto.imagen} alt="" className="img-modal-detalles" />
      </div>
      <div>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <h2>{props.producto.nombre} </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h2 className=""> ${props.producto.precio} </h2>
       <h4>detalle</h4>
        <p className="fuente-modal-detalles">
        {props.producto.detalle}
        </p>
        <h6>categoria: {props.producto.categoria}</h6>

      </Modal.Body>
      
      
      </div>
      </div>
    </Modal>
  );
};

export default ModalDetalles;
