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
import Adminmenu from "./components/Adminmenu";
import ModalDetalles from "./components/paginaPrincipal/ModalDetalles";
import AcercaDeNosotros from "./components/pages/AcercaDeNosotros";
import DetalleProducto from "./components/pages/DetalleProducto";
import DetallePedido from "./components/DetallePedido";
import FormularioMenu from "./components/paginaAdministrador/FormularioMenu";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";

function App() {
  const usuario =
    JSON.parse(sessionStorage.getItem("usuarioSazonDelAlma")) || "";

  const [modalShow, setModalShow] = useState(false);

  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  const producto = {
    nombre: "Milanesa",
    precio: 10000,
    img: "https://cdn.kiwilimon.com/brightcove/6364/6364.jpg",
    apto: "celiaco, vegano, vegetariano",
    detalle:
      "Originaria de la ciudad de Buenos Aires, Argentina, la milanesa napolitana es una preparación de carne, generalmente de vacuno, cubierta con salsa milanesa de tomate, jamón y queso. La carne se reboza para obtener una textura crujiente y luego se cocina en el horno para que el queso se funda. Es un contraste de sabores que gusta tanto a grandes como a pequeños",
    disponible: true,
    destacado: true,
    platosDisponibles: 100,
  };

  return (
    //rutas
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      <Routes>
        <Route
          path="/"
          element={
            <Principal
              producto={producto}
              setModalShow={setModalShow}
            ></Principal>
          }
        ></Route>
        <Route exact path="*" element={<Error404></Error404>}></Route>
        <Route exact path="/login" element={<LoginModal></LoginModal>}></Route>
        <Route
          exact
          path="/registro"
          element={<RegistroModal></RegistroModal>}
        ></Route>
        <Route exact path="/pedido" element={<Pedido></Pedido>}></Route>
        <Route exact path="/nosotros" element={<AcercaDeNosotros />}></Route>
        <Route
          exact
          path="/detalleProducto"
          element={<DetalleProducto />}
        ></Route>
        <Route
          exact
          path="/administrador/menu/*"
          element={
            <RutasProtegidas producto={producto} setModalShow={setModalShow}>
              <RutasAdmin></RutasAdmin>
            </RutasProtegidas>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
      <ModalDetalles
        show={modalShow}
        producto={producto}
        onHide={() => setModalShow(false)}
      ></ModalDetalles>
    </BrowserRouter>
  );
}

export default App;
