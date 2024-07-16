import React from 'react'
import FormData from './FormData'

const Schools = () => {
  return (
    <div className="w-full bg-[#E6E6E6]">
        <div className='container mx-auto '>
            <div className='flex flex-col justify-center items-center py-12 gap-2'>
                <h2 className='font-bold md:text-5xl text-3xl text-secondary text-center'>Find Schools</h2>
                <div className='flex flex-col gap-1 justify-center items-center'>
                    <div className='bg-primary w-40 h-1'></div>
                    <div className='bg-primary w-24 h-1'></div>
                </div>
            </div>

            <div className='flex bg-white shadow-md'>
                <div className='hidden md:block relative'>
                    <img src="/images/tab-1.png" alt="" />
                </div>
                <div className='w-full'>
                    <FormData/>
                </div>

                </div>
        </div>
      
    </div>
  )
}

export default Schools
