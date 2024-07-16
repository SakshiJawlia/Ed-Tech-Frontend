import React from 'react'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <div className='bg-[url("/images/slider_bg_01.png")] py-28 bg-cover bg-no-repeat'>
      <div className='container mx-auto'>
      <div className='w-[60%] flex flex-col gap-6'>
      <div className='flex'>
      <div className='text-white font-semibold text-lg flex items-center lg:gap-4 gap-2'>
        <h2 className='text-nowrap'>Welcome to Admission Pundit</h2>
        <div className='md:w-14 w-8 bg-primary h-1'></div>
      </div>
      </div>
      <h1 className='text-white font-bold lg:text-6xl text-4xl'>Admission Notifications</h1>
      <p className='text-white text-wrap'>Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.</p>
      <div className='flex flex-row gap-4'>
        <button className='flex flex-row md:gap-3 gap-2 text-white md:font-semibold border border-white bg-transparent hover:bg-primary md:px-5 px-3 md:py-2 py-1 hover:border-transparent items-center'>
          <div className='text-nowrap'>Discover More</div>
          <img src="/images/right-arrow.svg" alt="" className='md:block hidden'/>
        </button>
        <button className='flex flex-row gap-3 text-white md:font-semibold border border-white bg-transparent hover:bg-primary px-5 py-2 hover:border-transparent items-center text-nowrap'>Contact Us
        <img src="/images/right-arrow.svg" alt="" className='md:block hidden' />
        </button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
