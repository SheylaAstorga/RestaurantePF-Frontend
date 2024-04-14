import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

const DetallePedido = ({ comentario }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <i
        className="bi bi-arrow-down-short"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      ></i>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <p>{comentario}</p>
        </div>
      </Collapse>
    </>
  );
};

export default DetallePedido;
