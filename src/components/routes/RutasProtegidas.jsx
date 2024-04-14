import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { isRol } from "../../helpers/queris";

const RutasProtegidas = ({ children, usuarioLogueado }) => {
   const navegacion = useNavigate()
   const [isAdmin, setIsAdmin] = useState("admin")

   const verificarIsAdmin = async () => {
      try {
         if (usuarioLogueado.email !== "") {
            console.log(isAdmin, usuarioLogueado.email)
            const respuesta = await isRol({ email: usuarioLogueado.email })
            console.log(usuarioLogueado.email)
            const datos = await respuesta.json(respuesta)
            console.log(datos)
            if (respuesta.status === 200) {
               setIsAdmin(datos.role)
            } else {
               localStorage.removeItem('usuarioSazonDelAlma');
               navegacion("/login");
               Swal.fire({
                  title: "Ocurrio un error",
                  text: datos.mensaje,
                  icon: "error",
               });
            }
         } else {
            navegacion("/login");
            setIsAdmin("user")
         }
      } catch (error) {
         console.log(error)
         setIsAdmin("user")
      }
   }

   useEffect(() => {
      verificarIsAdmin()
   }, [usuarioLogueado])


   if (isAdmin === "admin") {
      return children
   } else {
      return <Navigate to={'/login'} ></Navigate>
   }
};

export default RutasProtegidas;