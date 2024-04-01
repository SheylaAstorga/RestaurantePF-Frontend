import CardDestacada from "./CardDestacada";

const Recomendaciones = ({setModalShow, producto}) => {
  return (
    <article>
      <h1 className="display-2 text-center">Nuestras recomendaciones </h1>
      <section>
        <CardDestacada setModalShow={setModalShow} producto={producto}></CardDestacada>
      </section>
    </article>
  );
};

export default Recomendaciones;
