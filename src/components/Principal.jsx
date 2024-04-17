import { useEffect, useState } from "react";
import BannerPrincial from "./paginaPrincipal/BannerPrincial";
import Recomendaciones from "./paginaPrincipal/Recomendaciones";
import ReservasPedidos from "./paginaPrincipal/ReservasPedidos";
import Direccion from "./paginaPrincipal/Direccion";
import { productosOfertaAPI } from "../helpers/queris";

const Principal = ({}) => {
  const [ofertas, setOfertas] = useState([]);

  const mostrarOfertas = async () => {
    let listaOferta = await productosOfertaAPI();
    setOfertas(listaOferta);
  };

  useEffect(() => {
    mostrarOfertas();
  }, []);

  return (
    <article className="fondo mainPage">
      <div className="btWp-contenedor align-self-end">
        
      <button className="btn btn-success btnWp"><a href="https://wa.me/+5493812021637" target="_blank"><i className="bi bi-whatsapp link-light"></i></a></button>
      </div>
      <BannerPrincial></BannerPrincial>
      <Recomendaciones productos={ofertas}></Recomendaciones>
      <ReservasPedidos></ReservasPedidos>
      <Direccion></Direccion>
    </article>
  );
};

export default Principal;
