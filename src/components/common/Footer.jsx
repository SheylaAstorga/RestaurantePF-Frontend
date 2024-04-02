import { Container, Row, Col } from 'react-bootstrap';
import logo from "../../assets/LogoSazon.png";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='w-100 py-3'>
            <Container>
                <Row className='text-light'>
                    <Col lg='3' md="12" sm="12">
                        <img src={logo} alt="logo" className='logoFooter' />
                    </Col>
                    <Col lg='3' md="4" sm="12">
                        <h3 className='mb-2 footerTitulos text-center'>Horarios:</h3>
                        <p className='footerCuerpos'>De lunes a sabados de 8 am a 11 pm</p>
                    </Col>
                    <Col lg='3' md="4" sm="12">
                        <h3 className='mb-2 footerTitulos text-center'>Nuestras redes:</h3>
                        <div className='footerRedes'>
                            <div className="my-3 mx-2"><NavLink className=" link-light" to="/error404"><i className="fs-4 ms-2 bi bi-facebook"></i></NavLink></div>
                            <div className="my-3 mx-2"><NavLink className=" link-light" to="/error404"><i className="fs-4 ms-2 bi bi-instagram"></i></NavLink></div>
                        </div>
                    </Col>
                    <Col lg='3' md="4" sm="12">
                        <h3 className='mb-2 footerTitulos text-center'>Soporte</h3>
                        <div className="d-flex flex-column text-center">
                        <NavLink to="/error404" className="mb-2 link-light link-underline-opacity-0 link-underline-opacity-100-hover">Contacto</NavLink>
                        <NavLink to="/nosotros" className="mb-2 link-light link-underline-opacity-0 link-underline-opacity-100-hover">Nosotros</NavLink>
                        <NavLink to="/error404" className="mb-2 link-light link-underline-opacity-0 link-underline-opacity-100-hover">Ayuda</NavLink>
                        <NavLink to="/error404" className="mb-2 link-light link-underline-opacity-0 link-underline-opacity-100-hover">Trabajo</NavLink>
                        </div>
                    </Col>
                </Row>
                <hr className='text-light' />
                <p className='text-center footerCuerpos text-light m-0'> &copy; Todos los derechos reservados</p>
            </Container>
        </footer>
    );
};

export default Footer;