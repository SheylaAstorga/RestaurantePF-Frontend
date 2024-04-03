
import { Button } from "react-bootstrap";

const ReservasPedidos = () => {
    return (
        <article className="d-flex p-3 rounded shadow">
            <section className="w-100 d-flex flex-column">
            <h2 className="display-5 mb-3">Nuestra prioridad es que disfrutes esta experiencia de sabores, aromas y texturas</h2>
           <section className="d-flex align-content-end  h-100 justify-content-center">
            <Button variant="outline-light" size="md" className="w-50 mx-1 color-texto-destacado">reservar</Button>
            <Button variant="outline-light" size="md" className="w-50 mx-1 color-texto-destacado">pedidos</Button>
           </section>
            </section>
           <section className="d-flex ">
                <img src="https://img.freepik.com/foto-gratis/mesa-reservada-restaurante_53876-41412.jpg" alt="" className="w-100  rounded"/>
            </section>
        </article>
    );
};

export default ReservasPedidos;