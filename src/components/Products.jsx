import { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {SlidesData } from '../constants'
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl'
import SwiperCore from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation';
import 'swiper/css/grid'


import {EffectCoverflow, Navigation, Pagination, Grid} from 'swiper/modules'
SwiperCore.use([Navigation, Pagination]);




const Products = () => {

    const [showDescription, setShowDescription] = useState(null);

    const handleSlideClick = (item) => {
        console.log('Slide clicked:', item.title);
        setShowDescription(showDescription === item ? null : item);
        };
  
  return (
    

    <section id={"Products"}>
    <div className='container max-w-[1920px] w-full m-auto bg-[#ffffff] h-[600px] xl:h-[750px] py-16 px-4 shadow-3xl'>
        <h1 className=' font-typewriter-bold uppercase md:text-1xl text-2xl lg:text-3xl text-raisinblack m-auto px-4 pb-7 text-center'>Most Popular Sets</h1>
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
            coverflowEffect={
                {
                    rotate:0, 
                    stech: 0,
                    depth: 100,
                    modifier:2.5
                }
            }
            pagination={{el:'.swiper-pagination',clickable:true}}
            navigation={{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev',
                clickable: true,
            }}
            modules={[Pagination, EffectCoverflow, Navigation]}
            className='swiper-container  max-w-[1420px] w-[60%] h-[30rem] xl:h-[40rem] m-auto bg-cover'
        
        >
                {SlidesData.map((item) => (
                    <SwiperSlide key={item.title}>
                    <div
                className={`relative card ${showDescription === item ? 'flipped' : ''}`}
                onClick={() => handleSlideClick(item)}
            >
                      <div className='flipper '>
                        <div className='front '>
                          <img src={item.bgimage} alt={item.title} className='w-[280px] md:w-[400px]' />
                          <h2 className='text-black font-typewriter-light p-1 text-center bg-white '>
                            {item.title}
                          </h2>
                        </div>
                        <div className='back bg-sage max-w-[1420px] w-[60%] justify-items-start content-start text-left'>
                          <h2 className='text-black font-typewriter-lightitalic text-lg text-left'>{item.title}</h2>
                          <p className='font-typewriter-light text-left '>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                
                <div className='slider-controler '>
                    <div className='swiper-button-prev slider-arrow'>
                        <SlArrowLeft className='icon' />
                    </div>
                    <div className='swiper-pagination md:mt-2 '></div>
                    <div className='swiper-button-next slider-arrow'>
                        <SlArrowRight className='icon' />
                    </div>
                    
                </div>
                

                
                
                
        </Swiper>

        
    </div>
    </section>
  )
}

export default Products