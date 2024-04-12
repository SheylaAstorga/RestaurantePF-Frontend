
import { Button } from "react-bootstrap";

 const ReservasPedidos = () => {
    return (
        <article className="d-flex p-4  rounded shadow glass-efect">
            <section className=" p-md-4 p-lg-0 w-100 d-flex flex-column texto-marron text-center my-lg-5">
            <h2 className="display-4">Nuestra prioridad es que disfrutes esta experiencia</h2>
            <hr  className="mx-lg-5 mx-md-4"/>
            <h2 className="fs-2">Anticipa una velada excepcional reservando tu mesa o realizando un pedido anticipado</h2>
            <h2 className="fs-2">Disfruta de la comodidad y del arte culinario desde el primer momento</h2>
           <section className="d-flex align-content-end  justify-content-center mb-4 me-lg-4 mt-lg-5 mt-3">
            <Button variant="outline-light " size="md" className="w-50 mx-3 color-texto-destacado">  <i className="bi bi-calendar-check"></i> Reservar</Button>
            <Button variant="outline-light" size="md" className="w-50 mx-1 color-texto-destacado "><i className="bi bi-cart4"></i> Pedidos</Button>
           </section>
            </section>
           <section className="d-flex">
                <img src="https://img.freepik.com/foto-gratis/mesa-reservada-restaurante_53876-41412.jpg" alt="imagen de reserva" className="w-100 img-reservas rounded my-1"/>
            </section>
        </article>
    );
};

export default ReservasPedidos;