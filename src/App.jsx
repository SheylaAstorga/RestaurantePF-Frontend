
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Pedido from "./components/Pedido";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./components/Principal";
import Admin from "./components/Admin";

function App() {

  return (
    //rutas
    <BrowserRouter>
    
      <Routes>
       <Route path="/" element={<Principal></Principal>}></Route>
        <Route exact path="/pedido" element={<Pedido></Pedido>}></Route>
        <Route exact path="/administrador/menu" element={<Admin></Admin>}></Route>
      </Routes>
    </BrowserRouter>


    
  );
}

export default App
