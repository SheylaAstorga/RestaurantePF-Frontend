import CardDestacada from "./CardDestacada";
import { Button } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../style/swiper.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";




const Recomendaciones = ({ productos }) => {
  



  return (
    <article className="glass-efect">
      <h1 className="display-2 text-center color-texto-destacado">Nuestras recomendaciones </h1>
      <Swiper
        spaceBetween={50}
        pagination={{
          type: "progressbar",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {productos.map((producto)=> <SwiperSlide key={producto._id}><CardDestacada  producto={producto}></CardDestacada> </SwiperSlide>)}
      
       
        
      </Swiper>
      <div className="d-grid gap-2 my-3 d-flex justify-content-center">
        <Link  className="w-75 my-3 btn btn-outline-light btn-lg efecto-card-menu text-black" to={"/menu"}>
          MENU
        </Link>
      </div>
     
              
    </article>
  );
};

export default Recomendaciones;
