import { Routes, Route } from "react-router-dom";
import Adminmenu from "../Adminmenu";
import FormularioMenu from "../paginaAdministrador/FormularioMenu";
import UsuariosAdmin from "../paginaAdministrador/UsuariosAdmin";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
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
        <Route
          exact
          path="/menu"
          element={<Adminmenu></Adminmenu>}
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
        <Route
          exact
          path="/usuario"
          element={
            <UsuariosAdmin></UsuariosAdmin>
          }
        ></Route>
        <Route
          exact
          path="/usuario/crear"
          element={
            <UsuariosAdmin></UsuariosAdmin>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
