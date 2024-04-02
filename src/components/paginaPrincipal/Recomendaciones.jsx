import CardDestacada from "./CardDestacada";
import{ useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../style/swiper.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


const Recomendaciones = ({setModalShow, producto}) => {
  return (
    <article>
      <h1 className="display-2 text-center">Nuestras recomendaciones </h1>
      <Swiper
      spaceBetween={50}
        pagination={{
          type: 'progressbar',
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay ]}
        className="mySwiper"
      >
        <SwiperSlide><CardDestacada setModalShow={setModalShow} producto={producto}></CardDestacada></SwiperSlide>
        <SwiperSlide><CardDestacada setModalShow={setModalShow} producto={producto}></CardDestacada></SwiperSlide>
        <SwiperSlide><CardDestacada setModalShow={setModalShow} producto={producto}></CardDestacada></SwiperSlide>
        <SwiperSlide><CardDestacada setModalShow={setModalShow} producto={producto}></CardDestacada></SwiperSlide>
        <SwiperSlide><CardDestacada setModalShow={setModalShow} producto={producto}></CardDestacada></SwiperSlide>
    
    
      </Swiper>
  
    </article>
  );
};

export default Recomendaciones;
