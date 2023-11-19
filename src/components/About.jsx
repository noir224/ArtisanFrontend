import React from 'react'
import brushes from '../assets/brushes2.jpg'

const About = () => {
  return (
    <section id={"About"}>
    <div className=' w-full py-16 px-4 bg-cover bg-center relative '
    style={{ backgroundImage: `url(${brushes})` }}>
        <div className='max-w-[1920px] mx-auto'>
            <div className='px-5'>
                <h1 className='text-2xl md:text-4xl font-artsy tracking-wider font-bold text-black py-1 uppercase ml-3 md:text-left md:mt-5'>
                <span className="text-stroke text-shadow-lg">About us</span></h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-4'>
                    <p className='text-sm font-typewriter-light font-bold text-black  bg-white shadow-2xl hover:bg-sage/50 hover:ease-in-out hover:duration-1000 m-1 rounded-xl py-5 px-2 '>Welcome to Artisan Art, where the alchemy of creativity meets the finesse of craftsmanship. At the heart of our brand is a deep appreciation for the artistry that flows through every stroke, every canvas, and every creator's imagination. We are more than a purveyor of premium art brushes; we are curators of inspiration, fostering a haven for artists who demand nothing less than excellence.</p>
                    <p className='text-sm font-typewriter-light font-bold text-black  bg-white shadow-2xl hover:bg-redpurple/50 hover:ease-in-out hover:duration-1000 m-1 rounded-xl py-5 px-2  '>Our story begins with a commitment to redefine the standards of artistic tools. Artisan Art brushes are not mere instruments; they are partners in your creative journey. Crafted with precision and passion, each brush in our collection is a testament to the marriage of innovation and tradition. We believe that every artist deserves the finest tools, and at Artisan Art, we meticulously source materials from around the world to bring you brushes that elevate your art to new heights.</p>
                    <p className='text-sm font-typewriter-light font-bold text-black  bg-white shadow-2xl hover:bg-[#602d46]/50 hover:ease-in-out hover:duration-1000 m-1 rounded-xl py-5 px-2  '>Step into a world where craftsmanship meets creativity, where every detail is a celebration of artistic expression. Our curated collections cater to the discerning artist, providing a range of brushes that resonate with various styles and techniques. From the lush strokes of oil painting to the delicate precision of watercolors, Artisan Art brushes are designed to bring your vision to life.</p>
                    <p className='text-sm font-typewriter-light font-bold text-black  bg-white shadow-2xl hover:bg-[#b8d8d8]/50 hover:ease-in-out hover:duration-1000 m-1 rounded-xl py-5 px-2  '>Join our community of artists who appreciate the nuance of superior tools. Artisan Art invites you to embrace the extraordinary, to discover the potential within every brushstroke, and to embark on a creative journey where every masterpiece begins with the perfect brush. Elevate your artistry, embrace the extraordinary, and let Artisan Art be your companion in the pursuit of creative excellence.</p>

                </div>
            </div>

        </div>
    </div>
    </section>
  )
}

export default About