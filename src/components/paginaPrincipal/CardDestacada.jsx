import Button from 'react-bootstrap/Button';


const CardDestacada = ({setModalShow, producto}) => {
  return (
    <>
      <div className="card card-contenedor-dest my-2 rounded shadow-lg" >
        <img src={producto.img} className=" card-img-dest" alt="..." />
        <div className="card-body card-contenido ">
          <h4 className="card-text card-text-bg text-center">
            {producto.nombre}
          </h4>
          <h5 className="card-text-bg text-center">{producto.precio}</h5>
          <div className="d-flex justify-content-center "> 
          <Button variant="outline-light card-btn-bg" className='w-25 mx-2 my-2' onClick={() => setModalShow(true)}><i className="bi bi-info-circle"></i></Button>
          <Button variant="outline-light card-btn-bg" className='w-25 mx-2 my-2'><i className="bi bi-bag-heart"></i></Button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDestacada;
