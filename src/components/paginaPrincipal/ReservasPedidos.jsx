
import { Button } from "react-bootstrap";

const ReservasPedidos = () => {
    return (
        <article className="d-flex p-3 rounded shadow glass-efect">
            <section className="w-100 d-flex flex-column texto-marron">
            <h2 className="display-4 mb-3">Nuestra prioridad es que disfrutes esta experiencia de sabores, aromas y texturas</h2>
           <section className="d-flex align-content-end  justify-content-center">
            <Button variant="outline-light" size="md" className="w-50 mx-1 color-texto-destacado">reservar</Button>
            <Button variant="outline-light" size="md" className="w-50 mx-1 color-texto-destacado">pedidos</Button>
           </section>
            </section>
           <section className="d-flex ">
                <img src="https://img.freepik.com/foto-gratis/mesa-reservada-restaurante_53876-41412.jpg" alt="" className="w-100 img-reservas rounded my-1"/>
            </section>
        </article>
    );
};

export default ReservasPedidos;