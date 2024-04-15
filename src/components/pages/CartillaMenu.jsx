import { useEffect, useState } from "react";
import CardMenu from "./CardMenu";
import { productosCategoriaAPI } from "../../helpers/queris";
import Form from "react-bootstrap/Form";
import CategoriaFiltrada from "./CategoriaFiltrada";

const CartillaMenu = () => {
  const [pPrincipal, setpPrincipal] = useState([]);
  const [pEntrada, setpEntrada] = useState([]);
  const [pDesayuno, setpDesayuno] = useState([]);
  const [pPostre, setpPostre] = useState([]);
  const [pMenuInfantil, setpMenuInfantil] = useState([]);
  const [pMenuEjecutivo, setpMenuEjecutivo] = useState([]);
  const [pVegano, setpVegano] = useState([]);
  const [pCeliaco, setpCeliaco] = useState([]);
  const [pVegetariano, setpVegetariano] = useState([]);
  const [seleccion, setSeleccion] = useState("todo");

  useEffect(() => {
    mostrarpPrincipal();
    mostrarpEntrada();
    mostrarpDesayuno();
    mostrarpPostre();
    mostrarpMenuInfantil();
    mostrarpMenuEjecutivo();
    mostrarpCeliaco();
    mostrarpVegano();
    mostrarpVegetariano();
  }, [seleccion]);

  const mostrarpPrincipal = async () => {
    const productos = await productosCategoriaAPI("Plato principal");
    setpPrincipal(productos);
  };

  const mostrarpEntrada = async () => {
    const productos = await productosCategoriaAPI("Entrada");
    setpEntrada(productos);
  };
  const mostrarpDesayuno = async () => {
    const productos = await productosCategoriaAPI("Desayuno");
    setpDesayuno(productos);
  };
  const mostrarpPostre = async () => {
    const productos = await productosCategoriaAPI("Postre");
    setpPostre(productos);
  };
  const mostrarpMenuInfantil = async () => {
    const productos = await productosCategoriaAPI("Menu infantil");
    setpMenuInfantil(productos);
  };
  const mostrarpMenuEjecutivo = async () => {
    const productos = await productosCategoriaAPI("Menu ejecutivo");
    setpMenuEjecutivo(productos);
  };
  const mostrarpVegano = async () => {
    const productos = await productosCategoriaAPI("Vegano");
    setpVegano(productos);
  };
  const mostrarpCeliaco = async () => {
    const productos = await productosCategoriaAPI("Celíaco");
    setpCeliaco(productos);
  };
  const mostrarpVegetariano = async () => {
    const productos = await productosCategoriaAPI("Vegetariano");
    setpVegetariano(productos);
  };

  const contenedorCategorias = [
    {
      nombre: "Desayunos",
      mapear: pDesayuno,
      tamanio: pDesayuno.length,
    },
    {
      nombre: "Entradas",
      mapear: pEntrada,
      tamanio: pEntrada.length,
    },
    {
      nombre: "Plato Princial",
      mapear: pPrincipal,
      tamanio: pPrincipal.length,
    },
    {
      nombre: "Menu Infantil",
      mapear: pMenuInfantil,
      tamanio: pMenuInfantil.length,
    },
    {
      nombre: "Menu Ejecutivo",
      mapear: pMenuEjecutivo,
      tamanio: pMenuEjecutivo.length,
    },
    {
      nombre: "Opciones veganas",
      mapear: pVegano,
      tamanio: pVegano.length,
    },
    {
      nombre: "Opciones celíacos",
      mapear: pCeliaco,
      tamanio: pCeliaco.length,
    },
    {
      nombre: "Opciones Vegetarianas",
      mapear: pVegetariano,
      tamanio: pVegetariano.length,
    },
    {
      nombre: "Postres",
      mapear: pPostre,
      tamanio: pPostre.length,
    },
  ];

  const opcionesDeCategoria = (x) => {
    switch (x) {
      case "todo":
        return contenedorCategorias.map((cate, index) => {
          if (cate.tamanio !== 0) {
            return (
              <CategoriaFiltrada
                key={index}
                categoria={cate.mapear}
                nombre={cate.nombre}
              />
            );
          }
        });
      case "Entrada":
        return (
          <CategoriaFiltrada
            categoria={pEntrada}
            nombre={"Entradas"}
          ></CategoriaFiltrada>
        );
      case "Desayuno":
        return (
          <CategoriaFiltrada
            categoria={pDesayuno}
            nombre={"Desayunos"}
          ></CategoriaFiltrada>
        );
      case "Plato principal":
        return (
          <CategoriaFiltrada
            categoria={pPrincipal}
            nombre={"Plato Princial"}
          ></CategoriaFiltrada>
        );
      case "Postre":
        return (
          <CategoriaFiltrada
            categoria={pPostre}
            nombre={"Postres"}
          ></CategoriaFiltrada>
        );
      case "Menu infantil":
        return (
          <CategoriaFiltrada
            categoria={pMenuInfantil}
            nombre={"Menu Infantil"}
          ></CategoriaFiltrada>
        );
      case "Menu ejecutivo":
        return (
          <CategoriaFiltrada
            categoria={pMenuEjecutivo}
            nombre={"Menu Ejecutivo"}
          ></CategoriaFiltrada>
        );
      case "Vegano":
        return (
          <CategoriaFiltrada
            categoria={pVegano}
            nombre={"Opciones veganas"}
          ></CategoriaFiltrada>
        );
      case "Vegetariano":
        return (
          <CategoriaFiltrada
            categoria={pVegetariano}
            nombre={"Opciones Vegetarianas"}
          ></CategoriaFiltrada>
        );
      case "Celíaco":
        return (
          <CategoriaFiltrada
            categoria={pCeliaco}
            nombre={"Opciones celíacos"}
          ></CategoriaFiltrada>
        );
    }
  };

  return (
    <>
      <article >
        <h1 className="display-1 text-center my-4">Nuestro Menu</h1>

        <Form.Group controlId="formBasicSelect " className="my-5 mx-lg-5 mx-md-4 mx-3">
          <Form.Select
            value={seleccion}
            onChange={(e) => setSeleccion(e.target.value)}
          >
            <option value="todo">todo nuestro menu</option>
            <option value="Entrada">Entrada</option>
            <option value="Desayuno">Desayuno</option>
            <option value="Plato principal">Plato principal</option>
            <option value="Postre">Postre</option>
            <option value="Menu infantil">Menu infantil</option>
            <option value="Menu ejecutivo">Menu ejecutivo</option>
            <option value="Vegano">Vegano</option>
            <option value="Vegetariano">Vegetariano</option>
            <option value="Celíaco">Celíaco</option>
          </Form.Select>
        </Form.Group>

        {opcionesDeCategoria(seleccion)}
      </article>
    </>
  );
};

export default CartillaMenu;
