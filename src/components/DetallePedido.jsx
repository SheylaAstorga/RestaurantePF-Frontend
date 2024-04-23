import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

const DetallePedido = ({ comentario }) => {
  const [open, setOpen] = useState(false);


  return (
    <div >
      <i
        className="bi bi-arrow-down-short btn btn-outline-warning"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        
      > detalle</i>
      <Collapse in={open}>
        <div id="example-collapse-text" className="contenedorPadreDetalle">
          <p className="my-4 text-center border rounded-4 w-100 text-break" >{comentario}</p>
        </div>
      </Collapse>
    </div>
  );
};

export default DetallePedido;
