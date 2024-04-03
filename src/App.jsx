import Menu from "./components/common/Menu"
import Footer from "./components/common/Footer"
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "bootstrap/dist/css/bootstrap.min.css";
import LoginModal from "./components/LoginModal";
import RegistroModal from "./components/RegistroModal";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioSazonDelAlma")) || "";

  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      <div className="mainPage">
        <h1>Bienvenidos a Sazón del alma</h1>
        <LoginModal></LoginModal>
        {/* <RegistroModal></RegistroModal> */}
      </div>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
