import { Form, Button } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
const FormularioMenu = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue
  } = useForm();
  const {id} = useParams();
  const navegacion = useNavigate()

  useEffect(()=>{
    if(editar){
    //   cargarDatosProducto();
    }
  },[])

//   const cargarDatosProducto = async()=>{
//     try{
//       const respuesta = await obtenerProductoAPI(id);
//       if(respuesta.status === 200){
//         const productoEncontrado = await respuesta.json();
//         setValue('nombre', productoEncontrado.nombre);
//         setValue('estado', productoEncontrado.estado);
//         setValue('precio', productoEncontrado.precio);
//         setValue('detalle', productoEncontrado.detalle);
//         setValue('categoria', productoEncontrado.categoria);
//         setValue('imagen', productoEncontrado.imagen);
//       }
//     }catch(error){
//       console.log(error)
//     }
//   }

//   const productoValidado = async (producto) => {
//     if (editar) {
//       const respuesta = await editarProductoAPI(producto,id);
//       if(respuesta.status === 200){
//         Swal.fire({
//           title: "Producto modificado",
//           text: `El producto "${producto.nombre}" fue modificado correctamente`,
//           icon: "success",
//         });
//         navegacion('/administrador');
//       }else{
//         Swal.fire({
//           title: "Ocurrio un error",
//           text: `El producto "${producto.nombre}" no pudo ser modificado. Intente esta operación en unos minutos`,
//           icon: "error",
//         });
//       }
//     } else {
//       const respuesta = await crearProductoAPI(producto);
//       if (respuesta.status === 201) {
//         Swal.fire({
//           title: "Producto creado",
//           text: `El producto "${producto.nombreProducto}" fue creado correctamente`,
//           icon: "success",
//         });
//         reset();
//       } else {
//         Swal.fire({
//           title: "Ocurrio un error",
//           text: `El producto "${producto.nombreProducto}" no pudo ser creado. Intente esta operación en unos minutos`,
//           icon: "error",
//         });
//       }
//     }
//   };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5 text-center">{titulo}</h1>
      <hr />
      <Form className="my-4" 
        // onSubmit={handleSubmit(productoValidado)}
      >
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Nombre*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombre", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message:
                  "Debe ingresar como minimo 2 caracteres para el nombre del producto",
              },
              maxLength: {
                value: 50,
                message:
                  "Debe ingresar como maximo 50 caracteres para el nombre del producto",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "El precio es obligatorio",
              min: {
                value: 50,
                message: "El precio como minimo debe ser de $50",
              },
              max: {
                value: 10000,
                message: "El precio como maximo debe ser de $10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La imagen es obligatoria",
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                message: "Debe ingresar una URL valida (jpg|jpeg|gif|png)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
            <Form.Label>Categoría*</Form.Label>
            <Controller
              name="categoria"
              control={control}
              rules={{ required: "Seleccione una categoría" }}
              render={({ field }) => (
                <Form.Select {...field}>
                  <option value="">Seleccione una opcion</option>
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
              )}
            />
            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Detalles*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático."
            as="textarea"
            {...register("detalle", {
              required: "el detalle del producto es obligatorio",
              minLength: {
                value: 10,
                message:
                  "Debe ingresar como minimo 10 caracteres para el detalle",
              },
              maxLength: {
                value: 300,
                message:
                  "Debe ingresar como maximo 300 caracteres para el detalle",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_breve?.message}
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioMenu;