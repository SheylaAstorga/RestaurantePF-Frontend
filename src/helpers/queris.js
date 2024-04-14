const api_productos = import.meta.env.VITE_API_PRODUCTOS;
const api_producto = import.meta.env.VITE_API_PRODUCTO;
const api_pedidos = import.meta.env.VITE_API_PEDIDOS;
const api_usuarios = import.meta.env.VITE_API_USUARIOS;

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
      console.error(error);
    }
  };

export const productosOfertaAPI = async () => {
  try {
    const datita = await fetch(api_productos);
    const listaProductos = await datita.json();
    let destacados = listaProductos.filter(
      (producto) => producto.estado == "En oferta"
    );

    return destacados;
  } catch (error) {
    console.error(error);
  }
};
export const productosCategoriaAPI = async (categoria) => {
  try {
    const datita = await fetch(api_productos);
    const listaProductos = await datita.json();
    let destacados = listaProductos.filter(
      (producto) => producto.categoria === categoria
    );
    
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
   
    return respuesta;
  } catch (error) {
    console.error(error);
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


export const modificarProductoAPI = async (productoModificado, id) => {
  try {
    const respuesta = await fetch(`${api_producto}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoModificado),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

/* PEDIDOS */
export const leerPedidoAPI = async () => {
  try {
      const respuesta = await fetch(api_pedidos);
      const listaPedido = await respuesta.json();
      return listaPedido;
  } catch (error) {
      console.error(error);
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
     console.error(error);
   }
 };

 // usuarios

 export const leerUsuarios = async () => {
  try {
    const respuesta = await fetch(`${api_usuarios}usuarios`)
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};


export const borrarUsuarios = async (email) => {
  try {
    const respuesta = await fetch(`${api_usuarios}borrarUsuario` , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};


export const suspenderUsuarios = async (email) => {
  try {
    const respuesta = await fetch(`${api_usuarios}suspenderUsuario` , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};


export const habilitarUsuarios = async (email) => {
  try {
    const respuesta = await fetch(`${api_usuarios}habilitarUsuario` , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const crearUsuariosAdmin = async (usuario) => {
  try {
    const respuesta = await fetch(`${api_usuarios}registroAdmin` , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};
