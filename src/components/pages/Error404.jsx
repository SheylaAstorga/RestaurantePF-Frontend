import React from 'react';
import '../../style/error404.css';
import error from '../../assets/error.png'
import Button from 'react-bootstrap/Button';

const Error404 = () => {
    return (
        <div className='text-center contenedor'>
            <img src={error} alt="error 404" />
            <h1>Oops! La pagina no funciona</h1>
            <Button variant='primary'>Volver al inicio</Button>{' '}
        </div>
    );
};

export default Error404;