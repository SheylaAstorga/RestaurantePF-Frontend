import React from "react";
import "../../style/error404.css";
import error from "../../assets/error.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="text-center contenedor">
      <img src={error} alt="error 404" />
      <h1>Oops! La pagina no funciona</h1>
      <Link to="/"  className="mb-4 mt-4 btn btn-primary">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default Error404;
