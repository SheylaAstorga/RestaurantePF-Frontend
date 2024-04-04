import {useState} from 'react';
import BannerPrincial from './paginaPrincipal/BannerPrincial';
import Recomendaciones from './paginaPrincipal/Recomendaciones';
import ModalDetalles from './paginaPrincipal/ModalDetalles';
import ReservasPedidos from './paginaPrincipal/ReservasPedidos';
import Direccion from './paginaPrincipal/Direccion';

const Principal = () => {
    const [modalShow, setModalShow] = useState(false);
const producto ={
    nombre: "Milanesa",
    precio: 10000,
    img: "https://cdn.kiwilimon.com/brightcove/6364/6364.jpg",
    apto: "celiaco, vegano, vegetariano",
    descripcionCorta: "mila de carne con papas fritas, con jamon y queso muzzarela",
    descripcionlarga : "Originaria de la ciudad de Buenos Aires, Argentina, la milanesa napolitana es una preparación de carne, generalmente de vacuno, cubierta con salsa milanesa de tomate, jamón y queso. La carne se reboza para obtener una textura crujiente y luego se cocina en el horno para que el queso se funda. Es un contraste de sabores que gusta tanto a grandes como a pequeños",
    disponible: true,
    destacado:true,
    platosDisponibles:100

}

    return (
       <article className='fondo'>
           <BannerPrincial></BannerPrincial>
           <Recomendaciones setModalShow={setModalShow} producto ={producto}></Recomendaciones>
           <ModalDetalles show={modalShow} producto={producto}
              onHide={() => setModalShow(false)}></ModalDetalles>
           <ReservasPedidos></ReservasPedidos>
            <Direccion></Direccion>
       </article>
    );
};

export default Principal;