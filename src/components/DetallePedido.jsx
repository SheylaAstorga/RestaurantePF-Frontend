import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

const DetallePedido = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
        <i className="bi bi-arrow-down-short"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        ></i>
      <Collapse in={open}>
        <div id="example-collapse-text">
       <p> Papas Fritas Medianas - Sal - Coca-Cola Zero - Hielo - Pan XL - Carne - Queso Cheddar en fetas - Cebolla - Tomate - Lechuga - Salsa Tasty - Salsa Spicy</p>
        </div>
      </Collapse>
      </>
    );
};

export default DetallePedido;