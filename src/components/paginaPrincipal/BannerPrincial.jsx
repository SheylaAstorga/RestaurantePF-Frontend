import Container from 'react-bootstrap/Container';
import bannerImg from "../../../public/bannerfondo.png";
import logo from "../../../public/SDAlogo.png";

const BannerPrincial = () => {
    return (
        <div className='w-100 '>
        
        <div className='z-0 position-absolute'>
            <img src={bannerImg} alt="" className='imgbanner'/>
        </div>
        <div className='z-1 position-absolute w-100 d-flex align-content-center justify-content-center contenedorLogo'>
            <img src={logo} alt="" className='w-50 fondoLogo'/>
        </div>
        
       
        </div>
    );
};

export default BannerPrincial;