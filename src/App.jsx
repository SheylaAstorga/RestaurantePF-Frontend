import Error404 from "./components/pages/Error404"
import "bootstrap/dist/css/bootstrap.min.css";
import LoginModal from "./components/LoginModal";
import RegistroModal from "./components/RegistroModal";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Pedido from "./components/Pedido";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./components/Principal";
import AcercaDeNosotros from "./components/pages/AcercaDeNosotros";


function App() {

  return (
    //rutas
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Principal></Principal>}></Route>
        <Route exact path="/pedido" element={<Pedido></Pedido>}></Route>
        <Route exact path="/acercaDeNosotros" element={<AcercaDeNosotros/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
