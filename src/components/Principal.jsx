import {useState} from 'react';
import BannerPrincial from './paginaPrincipal/BannerPrincial';
import Recomendaciones from './paginaPrincipal/Recomendaciones';
import ModalDetalles from './paginaPrincipal/ModalDetalles';
import ReservasPedidos from './paginaPrincipal/ReservasPedidos';
import Direccion from './paginaPrincipal/Direccion';

const Principal = ({producto}) => {
    const [modalShow, setModalShow] = useState(false);


    return (
       <article className='fondo mainPage'>
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