import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
 
export const Swipper = () => {

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop={true}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
      className="rounded-xl"
    >
      <SwiperSlide className="bg-gray-200 flex items-center justify-center text-xl font-semibold">
        Slide 1
      </SwiperSlide>
      <SwiperSlide className="bg-gray-200 flex items-center justify-center text-xl font-semibold">
        Slide 2
      </SwiperSlide>
      <SwiperSlide className="bg-gray-200 flex items-center justify-center text-xl font-semibold">
        Slide 3
      </SwiperSlide>
      <SwiperSlide className="bg-gray-200 flex items-center justify-center text-xl font-semibold">
        Slide 4
      </SwiperSlide>
    </Swiper>
  );
};