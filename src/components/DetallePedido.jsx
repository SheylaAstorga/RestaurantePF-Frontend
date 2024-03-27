import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

const DetallePedido = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
        <i class="bi bi-arrow-down-short"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        ></i>
      <Collapse in={open}>
        <div id="example-collapse-text">
        Papas Fritas Medianas - Sal - Coca-Cola Zero - Hielo - Pan XL - Carne - Queso Cheddar en fetas - Cebolla - Tomate - Lechuga - Salsa Tasty - Salsa Spicy
        </div>
      </Collapse>
      </>
    );
};

export default DetallePedido;