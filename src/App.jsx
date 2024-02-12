import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './App.css'

import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from './assets/img_1.jpeg';
import slide_image_2 from './assets/img_2.jpeg';
import slide_image_3 from './assets/img_3.jpeg';
import slide_image_4 from './assets/img_4.jpeg';
import slide_image_5 from './assets/img_5.jpeg';
import slide_image_6 from './assets/img_6.jpeg';
import slide_image_7 from './assets/img_7.jpg';
import slide_image_8 from './assets/img_8.jpeg';
import slide_image_9 from './assets/img_9.jpeg';
import slide_image_10 from './assets/img_10.jpeg';
import slide_image_11 from './assets/img_11.jpeg';
import slide_image_12 from './assets/img_12.jpeg';
import slide_image_13 from './assets/img_13.jpeg';
import slide_image_14 from './assets/img_14.jpeg';
import slide_image_15 from './assets/img_15.jpeg';
import slide_image_16 from './assets/img_16.jpg';


const App = () => {
    return (
        <div className="container pt-10 mx-auto">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_11} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_12} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_13} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_14} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_15} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_16} alt="slide_image" />
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default App;