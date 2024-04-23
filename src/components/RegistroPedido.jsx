import React from 'react';


const RegistroPedido = ({fila, borrarPedidoAPI}) => {
const nombreDeProductos = [];
const productomongo = fila.producto[0];

productomongo.forEach((producto, index) => {
    const nombreProducto = producto.nombre;
    const cantidad = producto.cantidad
    nombreDeProductos.push(nombreProducto+ "(" +cantidad+")"+"." +" ")
  });
const fecha = fila.fecha;
  const fechaObjeto = new Date(fecha);
  const dia = fechaObjeto.getDate();
const mes = fechaObjeto.getMonth() + 1; // Los meses en JavaScript son base 0 (0 = enero, 1 = febrero, etc.)
const anio = fechaObjeto.getFullYear();
const fechaFormateada = `${dia}/${mes}/${anio}`;
    return (
        <div className="row">  
        <div className="col-12 col-lg-6 pt-3">
          <div className=" d-flex justify-content-between">
          <h4>hola "{fila.usuario.nombreUsuario}" </h4>
          </div>
          <hr className="border border-dark border-1 opacity-50"></hr>
        <p>tu pedido del {fechaFormateada} es:</p>
          <p>{nombreDeProductos}</p>
        </div>
        <div className="col-12 col-lg-3 justify-content-center align-content-center d-flex flex-wrap">
          <button
            type="button"
            className="btn btn-outline-danger mx-1" onClick={()=>{borrarPedidoAPI(fila._id)}}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    );
};

export default RegistroPedido;