import React from 'react'
import style from './DokonCarousel.module.css'

import { EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

function DokonCarousel() {

  const swiperWidth = "50%";

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
          <SwiperSlide style={{ width: swiperWidth }}>
            <div className={style.image + ' ' + style.image1}></div>
          </SwiperSlide>
          <SwiperSlide style={{ width: swiperWidth }}>
            <div className={style.image + ' ' + style.image2}></div>
          </SwiperSlide>
          <SwiperSlide style={{ width: swiperWidth }}>
            <div className={style.image + ' ' + style.image3}></div>
          </SwiperSlide>
          <SwiperSlide style={{ width: swiperWidth }}>
            <div className={style.image + ' ' + style.image4}></div>
          </SwiperSlide>
          <SwiperSlide style={{ width: swiperWidth }}>
            <div className={style.image + ' ' + style.image5}></div>
          </SwiperSlide>
          <SwiperSlide style={{ width: swiperWidth }}>
            <div className={style.image + ' ' + style.image6}></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
export default DokonCarousel
