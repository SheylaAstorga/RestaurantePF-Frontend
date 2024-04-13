import { Link } from "react-router-dom";


const CardMenu = ({plato}) => {
    
    
    return (
        <Link className="efecto-card-menu col-lg-5 mx-3 my-3 link-offset-2 link-underline link-underline-opacity-0 text-dark " to={`/detalleProducto/${plato._id}`} >
            
          <div className="card-link">
            <div className="row">
            <div className="col-lg-5 col-md-3" >
                <img src={plato.imagen} alt=""  className="card-img-dest"/>
            </div>
            <div className="card-body col-lg-4 col-md-3 texto-marron">
              <h5 className="card-title margin-card-menu mt-2">{plato.nombre}</h5>
              <h6 className="margin-card-menu mt-2 fs-5">${plato.precio}</h6>
              <hr/>
               <p>
                {plato.detalle}
                </p> 
            </div>
          </div>

            </div>
        
        </Link>
    );
};

export default CardMenu;