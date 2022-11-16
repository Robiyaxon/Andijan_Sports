import React from 'react'
import style from './DokonCarousel.module.css'

import { EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom';

function DokonCarousel() {

  const swiperWidth = "50%";
  const map = [
    { id: 1, class: style.image1 },
    { id: 3, class: style.image2 },
    { id: 4, class: style.image3 },
    { id: 5, class: style.image4 },
    { id: 6, class: style.image5 },
    { id: 8, class: style.image6 },
  ]
  const map2 = map.map(a =>
    <SwiperSlide key={a.id} style={{ width: swiperWidth }}>
      <Link to={`/store/${a.id}`}>
        <div className={style.image + ' ' + a.class}></div>
      </Link>
    </SwiperSlide>
  )
  return (
    <div className={style.DokonCarousel}>
      <div className={style.App}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          initialSlide={1}       >
          {map2}
        </Swiper>
      </div>
    </div>
  )
}
export default DokonCarousel
