import CardMenu from "./CardMenu";

const CategoriaFiltrada = ({ categoria, nombre }) => {
  return (
    <section className="container my-4">
      <h2 className="display-5 mt-5">{nombre}</h2>
      <hr />
      <div className="row justify-content-center">
        {categoria.map((plato) => (
          <CardMenu key={plato._id} plato={plato}></CardMenu>
        ))}
      </div>
    </section>
  );
};

export default CategoriaFiltrada;
