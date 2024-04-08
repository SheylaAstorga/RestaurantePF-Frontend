import { Card } from "react-bootstrap";
import "../../style/detalleProducto.css";

const ItemDetalle = () => {
  return (
    <>
      <Card className="mx-3 my-5">
        <Card.Img variant="top" src="https://media.istockphoto.com/id/1057832648/es/foto/chuleta-de-ternera-frita-milanesa-con-lim%C3%B3n-y-primer-plano-de-papas-fritas-en-un-plato.jpg?s=1024x1024&w=is&k=20&c=y5ZmvqQpg4EN0SMD4HlaSqwiEGerHxRwsQONgH9VEYM=" />
        <Card.Body className="fondoLinkCard text-center">
          <Card.Link className="text-decoration-none text-white">
            Milanesa con papas
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemDetalle;
