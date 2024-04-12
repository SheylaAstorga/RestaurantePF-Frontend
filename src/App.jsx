import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import { useEffect, useState } from "react";
import Error404 from "./components/pages/Error404";
import LoginModal from "./components/LoginModal";
import RegistroModal from "./components/RegistroModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Pedido from "./components/Pedido";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./components/Principal";
import ModalDetalles from "./components/paginaPrincipal/ModalDetalles";
import AcercaDeNosotros from "./components/pages/AcercaDeNosotros";
import DetalleProducto from "./components/pages/DetalleProducto";
import DetallePedido from "./components/DetallePedido";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";

function App() {
  const usuario =
    JSON.parse(sessionStorage.getItem("usuarioSazonDelAlma")) || "";

  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    //rutas
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      <Routes>
        <Route path="/" element={<Principal></Principal>}></Route>
        <Route exact path="*" element={<Error404></Error404>}></Route>
        <Route exact path="/login" element={<LoginModal></LoginModal>}></Route>
        <Route
          exact
          path="/registro"
          element={<RegistroModal></RegistroModal>}
        ></Route>
        <Route exact path="/pedido" element={<Pedido></Pedido>}></Route>
        <Route exact path="/login" element={<LoginModal></LoginModal>}></Route>
        <Route
          exact
          path="/registro"
          element={<RegistroModal></RegistroModal>}
        ></Route>
        <Route exact path="/nosotros" element={<AcercaDeNosotros />}></Route>
        <Route
          exact
          path="/detalleProducto/:id"
          element={<DetalleProducto></DetalleProducto>}
        ></Route>
        <Route
          exact
          path="/administrador/*"
          element={
            <RutasProtegidas>
              <RutasAdmin></RutasAdmin>
            </RutasProtegidas>
          }>
        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
