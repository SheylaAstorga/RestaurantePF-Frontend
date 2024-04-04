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

const Recomendaciones = ({ setModalShow, producto }) => {
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
        <SwiperSlide>
          <CardDestacada
            setModalShow={setModalShow}
            producto={producto}
          ></CardDestacada>
        </SwiperSlide>
        <SwiperSlide>
          <CardDestacada
            setModalShow={setModalShow}
            producto={producto}
          ></CardDestacada>
        </SwiperSlide>
        <SwiperSlide>
          <CardDestacada
            setModalShow={setModalShow}
            producto={producto}
          ></CardDestacada>
        </SwiperSlide>
        <SwiperSlide>
          <CardDestacada
            setModalShow={setModalShow}
            producto={producto}
          ></CardDestacada>
        </SwiperSlide>
        <SwiperSlide>
          <CardDestacada
            setModalShow={setModalShow}
            producto={producto}
          ></CardDestacada>
        </SwiperSlide>
      </Swiper>
      <div className="d-grid gap-2 my-3 d-flex justify-content-center">
        <Button variant="outline-light color-texto-destacado" size="md" className="w-50 my-3">
          MENU
        </Button>
      </div>
    </article>
  );
};

export default Recomendaciones;
