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
                placeholder="Ej: usuario1234"
                {...register("nombreUsuario", {
                  required: "El nombre del usuario es obligatorio",
                  minLength: {
                    value: 4,
                    message:
                      "Debe ingresar como minimo 4 caracteres para el nombre del usuario",
                  },
                  maxLength: {
                    value: 15,
                    message:
                      "Debe ingresar como maximo 15 caracteres para el nombre del usuario",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreUsuario?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrecio">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="text"
                placeholder="usuario1234@gmail.com"
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                    message: "Debe ingresar un email valido",
                  }
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategoria">
              <Form.Label>rol del usuario*</Form.Label>
              <Controller
                name="rol"
                control={control}
                rules={{ required: "Seleccione un rol" }}
                render={({ field }) => (
                  <Form.Select {...field}>
                    <option value="" disabled>
                      Seleccione una opcion
                    </option>
                    <option value="user">usuario</option>
                    <option value="admin">administrador</option>
                  </Form.Select>
                )}
              />
              <Form.Text className="text-danger">
                {errors.rol?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña*</Form.Label>
              <Form.Control
                type="password"
                placeholder="seleccione su contraseña"
                {...register("password", {
                  required: "la contraseña es obligatoria",
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message: "la contraseña debe contener por lo menos 8 caracteres, letras tanto minusculaas y mayusculas y numeros",
                  }
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Repita la contraseña*</Form.Label>
              <Form.Control
                type="password"
                placeholder="seleccione su contraseña"
                {...register("password", {
                  required: "la contraseña es obligatoria",
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message: "la contraseña debe contener por lo menos 8 caracteres, letras tanto minusculaas y mayusculas y numeros",
                  }
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <div className="div-confirmar justify-content-between">
              <button type="submit" className="boton-formulario-admin confirmar text-decoration-none">
                Guardar
              </button>
              <Link type="text" className="boton-formulario-admin-cancelar cancelar ms-3 text-decoration-none text-center" to={"/administrador/usuario"}>
                Cancelar
              </Link>
            </div>
          </Form>
        </section>
    );
};

export default FormularioUsuarios;