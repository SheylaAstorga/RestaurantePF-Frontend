import Menu from "./components/common/Menu"
import Footer from "./components/common/Footer"
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
function App() {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioSazonDelAlma")) || "";

  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      <h1>Bienvenidos a Sazón del alma</h1>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
