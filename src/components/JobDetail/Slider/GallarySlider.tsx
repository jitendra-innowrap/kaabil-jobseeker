"use client";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, FreeMode } from 'swiper/modules';

interface GallerySliderProps extends SwiperOptions {
  slides: Array<any>; // Accept any type to handle custom slide components
  autoplayDuration?: number; // Autoplay duration in ms
  loop?: boolean; // Enable or disable looping
  autoplay?: boolean; // Enable or disable autoplay
  customArrowLeft?: React.ReactNode; // Custom left arrow component
  customArrowRight?: React.ReactNode; // Custom right arrow component
  showNavigation?: boolean; // Show or hide navigation arrows
  onHoverPause?: boolean; // Pause on hover
  reverse?: boolean; // Reverse autoplay direction
  freeMode?: boolean; // Enable free mode
  slideComponent?: React.ComponentType<any>; // Custom slide component
}

const GallerySlider: React.FC<GallerySliderProps> = ({
  slides,
  autoplayDuration = 2000,
  loop = true,
  autoplay = true,
  customArrowLeft,
  customArrowRight,
  showNavigation = false,
  freeMode = false,
  speed = 4000,
  spaceBetween = 25,
  slidesPerView = 'auto',
  reverse = false,
  onHoverPause = false,
  slideComponent: SlideComponent = null,
  ...restProps
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  // Autoplay settings
  const autoplayConfig = autoplay
    ? {
        delay: autoplayDuration,
        disableOnInteraction: false,
        pauseOnMouseEnter: onHoverPause,
        reverseDirection: reverse,
      }
    : false;
  console.log('slider', slides)
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, FreeMode]}
        loop={loop}
        autoplay={autoplayConfig}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        freeMode={freeMode}
        speed={speed}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={
          showNavigation
            ? {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }
            : undefined
        }
        {...restProps}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide} style={{width:'fit-content'}}>
            {SlideComponent ? (
              <SlideComponent {...slide} />
            ) : (
              slide
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation arrows */}
      {showNavigation && customArrowLeft && (
        <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
          {customArrowLeft}
        </div>
      )}
      {showNavigation && customArrowRight && (
        <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
          {customArrowRight}
        </div>
      )}
    </div>
  );
};

export default GallerySlider;
