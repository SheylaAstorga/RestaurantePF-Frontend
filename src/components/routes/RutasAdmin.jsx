import { Routes, Route } from "react-router-dom";
import Adminmenu from "../Adminmenu";
import FormularioMenu from "../paginaAdministrador/FormularioMenu";
import UsuariosAdmin from "../paginaAdministrador/UsuariosAdmin";
import FormularioUsuarios from "../paginaAdministrador/FormularioUsuarios";

const RutasAdmin = ({usuarioLogueado}) => {
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
            <UsuariosAdmin usuarioLogueado={usuarioLogueado}></UsuariosAdmin>
          }
        ></Route>
        <Route
          exact
          path="/usuario/crear"
          element={
            <FormularioUsuarios></FormularioUsuarios>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
