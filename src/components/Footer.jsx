import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa'




const Footer = () => {
  return (
    <section id={"Footer"}>
    <div className='max-w-[1920px] mx-auto py-16 px-4 bg-gunmetal grid lg:grid-cols-3 gap-8 text-background'>
        <div>
            <h1 className='font-artsy tracking-wide font-bold md:text-1xl text-2xl lg:text-3xl text-white m-auto px-4 pb-7'>Artisan Brushes</h1>
            <p className='m-auto px-4 pb-7'>© [Year] Artisan Art. All rights reserved. Terms & Conditions apply. Privacy Policy | Disclaimer: The content provided is for informational purposes only and is not intended to constitute legal advice. Artisan Art is not liable for any errors or omissions in the content.</p>
            <div className='flex justify-between md:w-[75%] my-6 px-4 '>
                <a href='#placeholder' target='_blank' rel='noopener noreferrer'>
                <FaFacebookSquare size={30}/>
                </a>
                <a href='#placeholder' target='_blank' rel='noopener noreferrer'>
                <FaInstagramSquare size={30}/>
                </a>
                <a href='#placeholder' target='_blank' rel='noopener noreferrer'>
                <FaTwitterSquare size={30}/>
                </a>
                <a href='#placeholder' target='_blank' rel='noopener noreferrer'>
                <FaDribbbleSquare size={30}/>
                </a>
                <a href='#placeholder' target='_blank' rel='noopener noreferrer'>
                <FaGithubSquare size={30}/>
                </a>
            </div>
        </div> 
        <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
        </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
    </section>
  )
}

export default Footer