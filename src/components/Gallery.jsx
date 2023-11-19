import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import SwiperCore from 'swiper';
import {EffectCoverflow, Navigation, Pagination, Grid} from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/grid';

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

const Gallery = () => {
    
    const [artworks, setArtworks] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://api.unsplash.com/photos/random', {
            params: {
              count: 8,
              client_id: 'OqPoLs4QAqrPizbaJ990txEPaKo5tXF3ipU26E9LS1s',
            },
          });
  
          setArtworks(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
    <section id={"Gallery"}>
      <div className='container max-w-[1920px] w-full m-auto bg-redpurple h-[600px] md:h-[700px] lg:h-[750px] xl:h-[950px] py-16 px-4 shadow-3xl'>
        <h1 className='font-typewriter-bold uppercase md:text-1xl text-2xl lg:text-3xl text-background m-auto px-4 pb-7 text-center'>
          ART GALLERY
        </h1>
        <Swiper
          effect={'coverflow'}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            758: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          className='swiper-container max-w-[1420px] w-[60%] h-[30rem] md:h-[32rem] xl:h-[40rem] m-auto bg-cover'
        >
          {artworks.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='flex flex-col items-center'>
                <img
                  src={item.urls.regular}
                  alt={item.alt_description || 'Artwork'}
                  className='object-cover bg-fill w-full h-[300px] md:h-[400px] lg:h-[500px]'
                />
                <h2 className='text-white font-typewriter-light p-1 text-center'>
                  {item.alt_description || 'Untitled'}
                </h2>
              </div>
            </SwiperSlide>
          ))}
  
          <div className='slider-controler md:mt-8 lg:mt-12'>
            <div className='swiper-button-prev slider-arrow'>
              <SlArrowLeft className='icon' />
            </div>
            <div className='swiper-pagination '></div>
            <div className='swiper-button-next slider-arrow'>
              <SlArrowRight className='icon' />
            </div>
          </div>
        </Swiper>
      </div>
      </section>
    );
    
  };
  
  export default Gallery;