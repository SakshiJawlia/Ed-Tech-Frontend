import React from 'react'

const SelectStream = () => {
  return (
    <div className="bg-[url('/images/confused.png')] bg-cover">
        <div className='bg-secondary/60 relative'>
        
            <div className='container mx-auto relative text-white flex flex-col gap-10'>
                <div className='font-semibold md:text-5xl text-3xl flex justify-center items-center my-10 text-center'>
                    <h1>Are you confused about selecting your stream</h1>
                </div>
                <div className='flex text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tem incid idunt ut labore et dol magna aliqua. Ut enim ad minim ven iam quis nostrud xerci tation Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eius mod tem incid idunt ut labore et dol magna aliqua. Ut enim ad minim ven iam quis nostrud xerci tation</div>
                <div className='flex justify-center items-center gap-4'>
                    <button className='px-5 py-2 flex gap-2 items-center hover:bg-primary hover:text-white font-semibold bg-transparent border-2 border-white hover:border-2 hover:border-transparent'>
                        <div>Read More</div>
                        <img src="/images/right-arrow.svg" alt="hi"/>
                    </button>
                    <button className='px-5 py-2 flex gap-2 items-center hover:bg-primary hover:text-white font-semibold bg-transparent border-2 border-white hover:border-2 hover:border-transparent'>
                        <div>Contact Us</div>
                        <img src="/images/right-arrow.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SelectStream
