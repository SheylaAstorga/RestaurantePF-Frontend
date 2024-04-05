import  { useState } from 'react';

const ElementoLista = ({producto}) => {
    const [estado,setEstado]=useState(true);

    const estadoProducto =()=>{
       
     if(estado === true){
            setEstado(false);
            console.log("estado:"+ estado);
        }else{
            setEstado(true);
            console.log("estado:"+ estado);
        }
    }
    
    return (
        <li className="list-group-item border-bottom border-black d-flex" >
            <div className='w-50 d-flex justify-content-center '>

            <img src={producto.img} alt="" className='img-thumbnail w-75'/>
            </div>
            <div className='w-100'>
                <div className=' d-flex justify-content-between'>
            <h5>{producto.nombre}</h5>
            <h6>${producto.precio}</h6>
                </div>
            <hr className="border border-dark border-1 opacity-50"></hr>
            
            <p>{producto.detalle.substr(0, 50)}...</p>
            </div>
            <div className='d-flex justify-content-end w-100 align-content-center flex-wrap'>
            <button type="button" className="btn btn-outline-light"><i className="bi bi-file-text"></i></button>
            <button type="button" className="btn btn-outline-light mx-3"><i className="bi bi-pencil-square"></i></button>
            <button type="button" className="btn btn-outline-light"><i className="bi bi-trash"></i></button>
            <button type="button" className="btn btn-outline-light" onClick={estadoProducto}><i className="bi bi-trash"></i></button>
            </div>
        </li>
    );
};

export default ElementoLista;