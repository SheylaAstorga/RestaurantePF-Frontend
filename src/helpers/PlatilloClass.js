export default class Platillo{
    #orden;
    #_id;
    #nombre;
    #precio;
    #detalle;
    #categoria;
    #imagen;
    #cantidad;
  
    constructor(orden, id , nombre, precio, detalle, categoria, imagen, cantidad) {
      this.#orden= orden;
      this.#_id = id;
      this.#nombre = nombre;
      this.#precio = precio;
      this.#detalle = detalle;
      this.#categoria = categoria;
      this.#imagen = imagen;
      this.#cantidad= cantidad
    }

    toJSON(){
        return {
        orden: this.#orden,
          _id:  this.#_id ,
          nombre: this.#nombre,
          precio: this.#precio,
          detalle: this.#detalle,
          categoria: this.#categoria,
          imagen: this.#imagen,
          cantidad: this.#cantidad
        }
      }
    

}