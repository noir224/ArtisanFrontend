import React from 'react'
import brushStroke from '../assets/brushStroke.png'
import brushes from '../assets/brushes.jpg'

const Hero = () => {
  return (
    <section id={"Hero"}>
    <div className='w-full text-black justify-center '>
      <div className='grid md:grid-cols-2 px-6 pt-40 md:pt-20 '>
        <div className='absolute -top-50 -left-1 -z-10 md:w-[50%] md:h-[60%] w-[60%] h-[60%] '>
            <img src={brushStroke} alt="/" className=' '></img>
          </div>
        <div className='mt-[-96px] mx-auto text-center flex flex-col justify-center pt-6 md:pl-8 lg:pl-16'>
          <h1 className=' lg:text-5xl md:text-4xl sm:text-4xl text-3xl drop-shadow-xl font-paintish md:pt-8 lg:pt-12 tracking-wider leading-relaxed'>Craft Your Masterpiece With Every</h1>
          <p className=' lg:text-5xl md:text-4xl sm:text-4xl text-3xl font-paintish tracking-wider hover:text-redpurple leading-relaxed'>Brushstroke</p>
          <p className='text-sm font-typewriter-bold font-bold text-black py-1 uppercase '>Providing you with quality brushes to elevate your art to the next level</p>
          <button className='taxt-sm bg-redpurple w-[180px] shadow-md shadow-redpurple/30 rounded-md font-typewriter-bold text-white my-6 mx-auto px-6 py-3 hover:scale-110 hover:ease-in-out duration-300'>Purchase Now</button>
          
        </div>
        
        <div className='pt-10 md:pt-5'>
          <img src={brushes} alt="/" className='max-w-[500px] w-[80%] mx-auto -z-10 shadow-lg rounded-lg mb-6'></img>
        </div>
        
      </div>  
    </div>
    </section>

  )
}

export default Hero