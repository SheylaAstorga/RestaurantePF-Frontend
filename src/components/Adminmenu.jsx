import { Button } from "react-bootstrap";
import ElementoLista from "./paginaAdministrador/ElementoLista";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../helpers/queris";
import { Link } from "react-router-dom";

const Adminmenu = ({ setModalShow }) => {
  const [platillos, setPlatillos] = useState([]);
  useEffect(() => {
    mostrarProductosAPI();
  }, []);

  const mostrarProductosAPI = async () => {
    const productos = await leerProductosAPI();
    setPlatillos(productos);
  };
  console.log(platillos);
  return (
    <>
      <article className="fondo my-5 mainPage d-flex flex-column">
        <h1 className="display-2 mx-4">Administrar Menú</h1>

        <ul className="list-group px-4">
          <li className="list-group-item border-bottom border-black text-end">
            <Link
              type="button"
              className="btn btn-outline-success mx-1"
              to={"/administrador/crear"}
            >
              <i className="bi bi-file-earmark-plus"> agregar</i>
            </Link>
          </li>
          {platillos.map((plato) => (
            <ElementoLista
              key={plato._id}
              producto={plato}
              setModalShow={setModalShow}
              setPlatillos={setPlatillos}
            ></ElementoLista>
          ))}
        </ul>
      </article>
    </>
  );
};

export default Adminmenu;
