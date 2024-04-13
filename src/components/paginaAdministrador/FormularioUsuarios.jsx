import { Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import "../../style/formulariosAdmin.css";
import { crearUsuariosAdmin } from "../../helpers/queris";

const FormularioUsuarios = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset,
        setValue,
      } = useForm();
    
    const usuarioValidado = async(usuario) => {
        const respuesta = await crearUsuariosAdmin(usuario)
        if (respuesta.status === 201) {
          Swal.fire({
            title: "Usuario creado",
            text: `El usuario "${usuario.nombreUsuario}" fue creado correctamente`,
            icon: "success",
          });
          reset();
        }else{
          Swal.fire({
            title: "Ocurrio un error",
            text: `El usuario "${usuario.nombreUsuario}" no pudo ser creado correctamente. Intente esta operación en unos minutos`,
            icon: "error",
          });
        }
    }

    return (
        <section className="container mainSection">
          <h1 className="display-4 mt-5 text-center">Crear Usuario</h1>
          <hr />
          <Form className="my-4" onSubmit={handleSubmit(usuarioValidado)}>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre Usuario*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Cafe"
                {...register("nombreUsuario", {
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
                {errors.nombre?.message}
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
                    <option value="" disabled>
                      Seleccione una opcion
                    </option>
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
            <Form.Group className="mb-3">
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
                {errors.detalle?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEstado">
              <Form.Label>Estado del Menú*</Form.Label>
              <Controller
                name="estado"
                control={control}
                rules={{ required: "Seleccione una categoría" }}
                render={({ field }) => (
                  <Form.Select {...field}>
                    <option value="" disabled>
                      Seleccione una opcion
                    </option>
                    <option value="Disponible">Disponible</option>
                    <option value="Agotado">Agotado</option>
                    <option value="En oferta">En oferta</option>
                    <option value="Recomendado">Recomendado</option>
                    <option value="Especial del dia">Especial del día</option>
                    <option value="Proximamente">Proximamente</option>
                  </Form.Select>
                )}
              />
    
              <Form.Text className="text-danger">
                {errors.estado?.message}
              </Form.Text>
            </Form.Group>
            <div className="div-confirmar justify-content-between">
              <button type="submit" className="boton-formulario-admin confirmar text-decoration-none">
                Guardar
              </button>
              <Link type="text" className="boton-formulario-admin-cancelar cancelar ms-3 text-decoration-none text-center" to={"/administrador/menu"}>
                Cancelar
              </Link>
            </div>
          </Form>
        </section>
    );
};

export default FormularioUsuarios;