import Button from 'react-bootstrap/Button';


const CardDestacada = ({setModalShow, producto}) => {
  return (
    <>
      <div className="card d-flex flex-md-row cambio-card-sm my-3 shadow-lg" >
        <div >
        <img src={producto.img} className=" card-img-dest" alt="..." />
        </div>
        <div className="card-body card-contenido ">
          <h2 className="card-text  text-center">
            {producto.nombre}
          </h2>
          <h5 className=" text-center text-black">${producto.precio}</h5>
          <p>apto: {producto.apto} </p>
          <div className="d-flex justify-content-center "> 
          <Button variant="outline-dark" className='w-25 mx-2 my-2' onClick={() => setModalShow(true)}><i className="bi bi-info-circle"></i></Button>
          <Button variant="outline-dark" className='w-25 mx-2 my-2'><i className="bi bi-bag-heart"></i></Button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDestacada;
