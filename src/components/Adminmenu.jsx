import { Button } from "react-bootstrap";
import ElementoLista from "./paginaAdministrador/ElementoLista";

const Adminmenu = ({producto, setModalShow}) => {
  
  
  return (
    <>
      <article className="fondo my-5 mainPage d-flex flex-column">
        <h1 className="display-2 mx-4">Administrar Menú</h1>
        
        <ul className="list-group px-4">
          <li className="list-group-item border-bottom border-black text-end"><Button variant="outline-success" >
            <i className="bi bi-file-earmark-plus"> agregar</i>
          </Button></li>

          <ElementoLista producto ={producto} setModalShow={setModalShow}></ElementoLista>
          <ElementoLista producto ={producto} setModalShow={setModalShow}></ElementoLista>
            
        </ul>
     
      </article>
    </>
  );
};

export default Adminmenu;
