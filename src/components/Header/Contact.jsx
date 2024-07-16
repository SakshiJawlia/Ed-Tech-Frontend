import React from 'react'

const Contact = () => {
  return (
    <div className='lg:block w-full bg-secondary hidden'>
    <div className='container mx-auto'>
        <div className='flex justify-between'>
            <a href='https://support.google.com/mail/answer/56256?hl=en'>
                <div className="bg-[url('/images/Vector2.png')] flex items-center gap-3 p-3">
                        <div className='w-9 h-9'>
                            <img src="/images/email.png" alt="" />
                        </div>
                        <div className='flex flex-col text-white font-semibold'>
                            <div className='text-xs'>Email Now</div>
                            <div>info@example.com</div>
                        </div>
                </div>
            </a>
            <div className='bg-secondary flex items-center gap-7'>
                <div className='text-white font-semibold'>Follow Us:-</div>
                <div className='flex gap-6'>
                    <a href="https://facebook.com">
                        <img src="/images/facebook.png" alt="" className='w-20-h-20'/>
                    </a>
                    <a href="https://instagram.com">
                        <img src="/images/instagram.png" alt="" className='w-20-h-20'/>
                    </a>
                    <a href="linkedin">
                        <img src="/images/linkedin.png" alt="" className='w-20-h-20'/>
                    </a>
                    <a href="https://x.com">
                        <img src="/images/twitter.png" alt="" className='w-20-h-20'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
