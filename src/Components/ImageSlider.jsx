
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from 'swiper'
import "swiper/css";

import HeroSlide from "./HeroSlide";

export default function ImageSlider() {
  
  SwiperCore.use([Autoplay])
  return (
    <Swiper 
      slidesPerView={1}
      loop={true}
      autoplay= {{
        delay: 5000
      }}
       className="container w-screen">
      <SwiperSlide>
        <HeroSlide />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSlide />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSlide />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSlide />
      </SwiperSlide>
    </Swiper>
  );
}
