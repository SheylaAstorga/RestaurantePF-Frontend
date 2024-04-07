import  { useState } from 'react';

const ElementoLista = ({producto, setModalShow}) => {
    
    const [estado,setEstado]=useState(true);
    const [iconCheck,seticonCheck]=useState("bi bi-check-circle-fill");
    const estadoProducto =()=>{
       
     if(estado === true){
        seticonCheck("bi bi-check-circle-fill text-success");
            setEstado(false);
            
        }else{
            seticonCheck("bi bi-dash-circle-fill text-danger");
            setEstado(true);
        }
    }
    
    return (
        <li className="list-group-item w-100 container glass-efect " >
           <div className='row'>

            <div className='col-12 col-lg-3 align-items-center justify-content-center d-flex'>

            <img src={producto.img} alt="" className='img-thumbnail w-75'/>
            </div>
            <div className='col-12 col-lg-6 pt-3'>
                <div className=' d-flex justify-content-between'>
            <h5>{producto.nombre}</h5>
            <h6>${producto.precio}</h6>
                </div>
            <hr className="border border-dark border-1 opacity-50"></hr>
            
            <p>{producto.detalle.substr(0, 50)}...</p>
            </div>
            <div className='col-12 col-lg-3 justify-content-center align-content-center d-flex'>
            <button type="button" className="btn btn-outline-dark mx-1 " onClick={() => setModalShow(true)}><i className="bi bi-file-text"></i></button>
            <button type="button" className="btn btn-outline-success mx-1"><i className="bi bi-pencil-square"></i></button>
            <button type="button" className="btn btn-outline-danger mx-1 "><i className="bi bi-trash"></i></button>
            <button type="button" className="btn btn-outline-dark mx-1" onClick={estadoProducto}><i className={iconCheck}></i></button>
            </div>
           </div>
        </li>
    );
};

export default ElementoLista;