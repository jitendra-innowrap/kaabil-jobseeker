"use client"
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';


export default function gallarySlider() {
    const swiperRef = useRef<any>(null); // Create a ref for accessing swiper instance

    return (
      <div className="block">
        <Swiper
          spaceBetween={20}
          slidesPerView={'auto'} // Allow variable widths
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance
        >
          <SwiperSlide style={{ width: '320px' }}>
            <Image
                className='cursor-pointer'
                src={"/assets/sliders/company-1.png"}
                width={320}
                height={260}
                alt='company culture'
                />
          </SwiperSlide>
          <SwiperSlide style={{ width: '320px' }}>
            <Image
                className='cursor-pointer'
                src={"/assets/sliders/company-1.png"}
                width={320}
                height={260}
                alt='company culture'
                />
          </SwiperSlide>
          <SwiperSlide style={{ width: '320px' }}>
            <Image
                className='cursor-pointer'
                src={"/assets/sliders/company-1.png"}
                width={320}
                height={260}
                alt='company culture'
                />
          </SwiperSlide>
          <SwiperSlide style={{ width: '320px' }}>
            <Image
                className='cursor-pointer'
                src={"/assets/sliders/company-1.png"}
                width={320}
                height={260}
                alt='company culture'
                />
          </SwiperSlide>
          <SwiperSlide style={{ width: '320px' }}>
            <Image
                className='cursor-pointer'
                src={"/assets/sliders/company-1.png"}
                width={320}
                height={260}
                alt='company culture'
                />
          </SwiperSlide>
        </Swiper>
      </div>
    );
}
