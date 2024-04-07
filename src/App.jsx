import Menu from "./components/common/Menu"
import Footer from "./components/common/Footer"
import { useState } from "react";
import Error404 from "./components/pages/Error404"
import LoginModal from "./components/LoginModal";
import RegistroModal from "./components/RegistroModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Pedido from "./components/Pedido";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./components/Principal";
import AcercaDeNosotros from "./components/pages/AcercaDeNosotros";


function App() {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioSazonDelAlma")) || "";

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
        <Route exact path="/pedido" element={<Pedido></Pedido>}></Route>
        <Route exact path="/nosotros" element={<AcercaDeNosotros/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App
