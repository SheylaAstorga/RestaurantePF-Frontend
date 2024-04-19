import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import { useState } from "react";
import Error404 from "./components/pages/Error404";
import LoginModal from "./components/LoginModal";
import RegistroModal from "./components/RegistroModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Pedido from "./components/Pedido";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./components/Principal";
import AcercaDeNosotros from "./components/pages/AcercaDeNosotros";
import DetalleProducto from "./components/pages/DetalleProducto";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import CartillaMenu from "./components/pages/CartillaMenu";

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(JSON.parse(localStorage.getItem('usuarioSazonDelAlma')) || { email: "", token: "" });
  const actualizarUsuario = () => {
    setUsuarioLogueado(JSON.parse(localStorage.getItem('usuarioSazonDelAlma')) || { email: "", token: "" })
  }
  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        actualizarUsuario={actualizarUsuario}
      ></Menu>
      <Routes>
        <Route path="/" element={<Principal></Principal>}></Route>
        <Route exact path="*" element={<Error404></Error404>}></Route>
        <Route
          exact
          path="/registro"
          element={<RegistroModal actualizarUsuario={actualizarUsuario}></RegistroModal>}
        ></Route>
        <Route exact path="/pedido" element={<Pedido></Pedido>}></Route>
        <Route exact path="/login" element={<LoginModal actualizarUsuario={actualizarUsuario}></LoginModal>}></Route>
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
            <RutasProtegidas
              usuarioLogueado={usuarioLogueado}>
              <RutasAdmin usuarioLogueado={usuarioLogueado}></RutasAdmin>
            </RutasProtegidas>
          }
        ></Route>
        <Route exact path="/nosotros" element={<AcercaDeNosotros />}></Route>
        <Route
          exact
          path="/menu"
          element={<CartillaMenu></CartillaMenu>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
