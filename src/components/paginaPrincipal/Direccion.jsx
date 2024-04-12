import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap-icons/font/bootstrap-icons.css";

const Direccion = () => {
  return (
    <article className=" p-4 rounded shadow glass-efect">
      <section className="text-center my-4">
        <h2 className="display-5 fw-bold texto-marron">Visítanos</h2>
        <p className="lead texto-marron">
          Encuentra el camino a los mejores sabores de la ciudad.
        </p>
      </section>

      <section className="d-flex flex-column flex-lg-row flex-md-row justify-content-around">
        <div className="w-100 me-lg-4 mb-3">
          <ListGroup className="list-group-flush text-center shadow rounded m-2 mb-lg-4">
            <ListGroup.Item className="text-light direccion-cards">
              <i className="bi bi-geo-alt-fill"></i> Dirección
            </ListGroup.Item>
            <ListGroup.Item>Gral. Paz 576</ListGroup.Item>
            <ListGroup.Item>S.M. de Tucumán - Argentina</ListGroup.Item>
          </ListGroup>

          <ListGroup className="list-group text-center shadow rounded m-2 mb-lg-4">
            <ListGroup.Item className="text-light direccion-cards">
              <i className="bi bi-clock-fill"></i> Horarios
            </ListGroup.Item>
            <ListGroup.Item>Lunes a Sábados: 08:00 - 00:00</ListGroup.Item>
            <ListGroup.Item>Domingos: 08:00 - 13:00</ListGroup.Item>
          </ListGroup>

          <ListGroup className="list-group text-center shadow rounded m-2 mb-lg-4">
            <ListGroup.Item className="text-light direccion-cards ">
              <i className="bi bi-telephone-fill"></i> Contacto
            </ListGroup.Item>
            <ListGroup.Item>
              <a
                href="tel:+540123456789"
                className="text-decoration-none text-dark"
              >
                +54 012 345 6789
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a
                href="mailto:info@turestaurante.com"
                className="text-decoration-none text-dark"
              ></a>
            </ListGroup.Item>
          </ListGroup>
        </div>

        <div className="w-100 ms-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.106067949493!2d-65.20974192528023!3d-26.836578490025683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1712195141689!5m2!1ses-419!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="maps-style w-100 border rounded"
            style={{ height: "300px" }}
          ></iframe>
        </div>
      </section>
    </article>
  );
};

export default Direccion;
