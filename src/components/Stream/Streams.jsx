import React from 'react'
import { useState } from 'react'
import Engineering from './StreamForms/Engineering'
import Management from './StreamForms/Management'
import Medical from './StreamForms/Medical'
import HotelManagement from './HotelManagement'
import Arts from './StreamForms/Arts'

const buttons=[
    {
        text:"Engineering"
    },
    {
        text:"Management"
    },
    {
        text:"Medical"
    },
    {
        text:"Hotel Management"
    },
    {
        text:"Arts"
    },
]

const Streams = () => {
    const [tab, setTab] = useState('Engineering')
    function setTabHnadler(currentTab){
        setTab(currentTab)
    }
  return (
    <div className="lg:bg-[url('/images/student1.png')] bg-hidden bg-cover py-8">
      <div className='lg:hidden flex justify-center items-center'>
        <img src="/images/student1resp.png" alt=""/>
      </div>
        <div className='container mx-auto'>
            <div className='flex flex-col md:gap-12 gap-8'>
            <div className='flex flex-col gap-2'>
                <h1  className='flex text-center font-bold text-secondary md:text-5xl text-3xl'>What's with your Stream</h1>
                <div className='md:hidden flex flex-col gap-1 justify-center items-center'>
                    <div className='bg-primary w-40 h-1'></div>
                    <div className='bg-primary w-24 h-1'></div>
                </div>
            </div>
                  <div className='flex max-w-[300px] overflow-scroll md:overflow-visible no-scrollbar'>
                        {
                            buttons.map((data)=>(
                                <button className='text-primary md:px-5 px-3 md:py-2 py-1 border-2 border-collapse border-primary hover:text-white hover:bg-primary transition-all' onClick={()=>{setTabHnadler(data.text)}}>{data.text}</button>
                            ))
                        }
                  </div>
                  <div className='flex md:justify-start justify-center items-center'>
                    {
                      tab==='Engineering' && <Engineering/>
                    }
                    {
                      tab==='Management' && <Management/>
                    }
                    {
                      tab==='Medical' && <Medical/>
                    }
                    {
                      tab==='Hotel Management' && <HotelManagement/>
                    }
                    {
                      tab==='Arts' && <Arts/>
                    }
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Streams
