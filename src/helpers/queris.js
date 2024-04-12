const api_productos = import.meta.env.VITE_API_PRODUCTOS;
const api_producto = import.meta.env.VITE_API_PRODUCTO;
const api_pedidos = import.meta.env.VITE_API_PEDIDOS;


//mostrar todos los productos
export const leerProductosAPI = async () => {
  try {
    const datita = await fetch(api_productos);
    const listaProductos = await datita.json();
    return listaProductos;
  } catch (error) {
    console.error(error);
  }
};
export const obtenerProductoAPI = async (id) => {
    try {
      const respuesta = await fetch(api_producto + "/" + id);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

export const productosOfertaAPI = async () => {
  try {
    const datita = await fetch(api_productos);
    const listaProductos = await datita.json();
    let destacados = listaProductos.filter(
      (producto) => producto.estado == "En oferta"
    );
    console.log(destacados);
    return destacados;
  } catch (error) {
    console.error(error);
  }
};
export const productosEstadoAPI = async (categoria) => {
  try {
    const datita = await fetch(api_productos);
    const listaProductos = await datita.json();
    let destacados = listaProductos.filter(
      (producto) => producto.categoria === categoria
    );
    console.log(destacados);
    return destacados;
  } catch (error) {
    console.error(error);
  }
};


export const crearProductoAPI = async (productoNuevo) => {
  try {
    const respuesta= await fetch(api_productos,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productoNuevo)
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarPlatoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${api_producto}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

/* PEDIDOS */
export const leerPedidosAPI = async () => {
  try {
      const respuesta = await fetch(api_pedidos);
      const listaPedidos = await respuesta.json();
      return listaPedidos;
  } catch (error) {
      console.log(error);
  }
};

// //create pedidos

 export const crearPedidoAPI = async (pedido) => {
   try {
     const respuesta = await fetch(api_pedidos, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(pedido),
     });
     const data = await respuesta.json();
     return data;
   } catch (error) {
     console.log(error);
   }
 };
