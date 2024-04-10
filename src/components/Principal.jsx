import {useEffect, useState} from 'react';
import BannerPrincial from './paginaPrincipal/BannerPrincial';
import Recomendaciones from './paginaPrincipal/Recomendaciones';
;
import ReservasPedidos from './paginaPrincipal/ReservasPedidos';
import Direccion from './paginaPrincipal/Direccion';
import { productosOfertaAPI } from '../helpers/queris';

const Principal = ({}) => {
    
const [ofertas,setOfertas]=useState([]);

useEffect(()=>{
mostrarOfertas()
},[])
const mostrarOfertas=async()=>{
    
    let listaOferta = await productosOfertaAPI();
    setOfertas(listaOferta);
}


    return (
       <article className='fondo mainPage'>
           <BannerPrincial></BannerPrincial>
           <Recomendaciones  productos ={ofertas}></Recomendaciones>
           
           <ReservasPedidos></ReservasPedidos>
            <Direccion></Direccion>
       </article>
    );
};

export default Principal;