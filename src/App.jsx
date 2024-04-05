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
import Adminmenu from "./components/Adminmenu";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioSazonDelAlma")) || "";

  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);
  const producto ={
    nombre: "Milanesa",
    precio: 10000,
    img: "https://cdn.kiwilimon.com/brightcove/6364/6364.jpg",
    apto: "celiaco, vegano, vegetariano",
    detalle : "Originaria de la ciudad de Buenos Aires, Argentina, la milanesa napolitana es una preparación de carne, generalmente de vacuno, cubierta con salsa milanesa de tomate, jamón y queso. La carne se reboza para obtener una textura crujiente y luego se cocina en el horno para que el queso se funda. Es un contraste de sabores que gusta tanto a grandes como a pequeños",
    disponible: true,
    destacado:true,
    platosDisponibles:100
}

  return (
    //rutas
    <BrowserRouter>

<Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      <Routes>
       <Route path="/" element={<Principal producto= {producto}></Principal>}></Route>
        <Route exact path="/pedido" element={<Pedido></Pedido>}></Route>
        <Route exact path="/administrador/menu" element={<Adminmenu producto={producto}></Adminmenu>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App
