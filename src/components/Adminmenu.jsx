import { Button } from "react-bootstrap";
import ElementoLista from "./paginaAdministrador/ElementoLista";

const Adminmenu = ({producto}) => {
  
  
  return (
    <>
      <article className="fondo my-5 mainPage">
        <h1 className="display-2">Administrar Menú</h1>
        <section className="d-flex justify-content-end">
          
        </section>
        <ul className="list-group ">
          <li className="list-group-item border-bottom border-black text-end"><Button variant="outline-success" className="">
            <i className="bi bi-file-earmark-plus"> agregar</i>
          </Button></li>

          <ElementoLista producto ={producto}></ElementoLista>
            
        </ul>
     
      </article>
    </>
  );
};

export default Adminmenu;
