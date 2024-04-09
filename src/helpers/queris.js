const api_productos = import.meta.env.VITE_API_PRODUCTOS;
const api_producto = import.meta.env.VITE_API_PRODUCTO

//mostrar todos los productos
export const leerProductosAPI = async()=>{
try{
    const datita = await fetch(api_productos);
    const listaProductos = await datita.json();
    console.log(listaProductos);
    return listaProductos;
}catch(err){
    console.error(err);
}

};

export const productosOfertaAPI = async()=>{
try{
    const datita = await fetch(api_productos);
    const listaProductos = await datita.json();
    let destacados = listaProductos.filter(producto => producto.estado == "En oferta");
    console.log(destacados);
    return destacados;
}catch(err){
    console.error(err);
}
};

export const borrarPlatoAPI = async(id)=>{
try{
    const repuesta= await fetch(`${api_producto}/${id}`,{
        method:"DELETE"
    })
    return repuesta;

}catch(err){
    console.error(err)
}
}

