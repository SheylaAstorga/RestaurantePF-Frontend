import { Card } from "react-bootstrap";
import "../../style/detalleProducto.css";
import { Link } from "react-router-dom";

const ItemDetalle = ({ plato }) => {
  return (
    <>
      <Card className="mx-3 mb-5 tamanioCardItemCarousel">
        <div className="img-detalle-producto-contenedor">
          <Card.Img variant="top" src={plato.imagen} />
        </div>

        <Card.Body className="fondoLinkCard text-center">
          <Card.Link className="text-decoration-none text-white">
            {plato.nombre}
          </Card.Link>
        </Card.Body>
        <Card.Footer className="fondoLinkCard text-center">
          <Link
            className="btn btn-outline-light w-75 mx-2 my-2"
            to={`/detalleProducto/${plato._id}`}
            onClick={window.location.reload}
          >
            <i className="bi bi-info-circle fs-4"></i>
          </Link>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ItemDetalle;
