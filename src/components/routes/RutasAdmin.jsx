import { Routes, Route } from "react-router-dom";
import Adminmenu from "../Adminmenu";
import FormularioMenu from "../paginaAdministrador/FormularioMenu";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Adminmenu
              producto={producto}
              setModalShow={setModalShow}
            ></Adminmenu>
          }
        ></Route>
        <Route
          exact
          path="/crear"
          element={
            <FormularioMenu titulo="Crear menú" editar={false}></FormularioMenu>
          }
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={
            <FormularioMenu titulo="Editar menú" editar={true}></FormularioMenu>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
