import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import 'swiper/swiper.min.css';
// import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination]);
export default function MySlider() {
  const params = {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
  };
  return (
    <Swiper className="mySwiper" {...params}>
      <SwiperSlide>
        <p>
          Problemlərinizin xülasəsini aşağıdaki mətn bölməsinə daxil etdikdən
          sonra süni intellekt sizi ÇatBot-a yönləndirəcək.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <p>
          Problemlərinizin xülasəsini aşağıdaki mətn bölməsinə daxil etdikdən
          sonra süni intellekt sizi ÇatBot-a yönləndirəcək.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <p>
          Problemlərinizin xülasəsini aşağıdaki mətn bölməsinə daxil etdikdən
          sonra süni intellekt sizi ÇatBot-a yönləndirəcək.
        </p>
      </SwiperSlide>
    </Swiper>
  );
}
