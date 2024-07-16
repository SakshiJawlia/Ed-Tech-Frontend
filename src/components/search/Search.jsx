import React from 'react'
import { useState } from 'react'

const Search = () => {
    
    const filterData=[
        {
            category:"Schools"
        },
        {
            category:"Colleges"
        },
        {
            category:"Study abroad"
        },
        {
            category:"Universities"
        },
    ]

    const [text, settext] = useState("Schools");
    function textHandler(currentText){
        settext(currentText)
    }

  return (
    <div className='w-full bg-secondary '>
        <div className='container mx-auto flex flex-col justify-center items-center gap-9 pt-5'>
        <div className='flex'>
        <input type="text"  
            placeholder={`Seach by ${text}`}
            className='md:p-4 p-2'
        />
        <div className='h-30 w-30'>
            <img src="/images/search1.png"/>
        </div>
        </div>
        <div className='flex md:gap-24 sm:gap-10 gap-1'>
        {
            filterData.map((data)=>(
                <div className='md:font-semibold text-white md:border-4 border-2 border-transparent hover:md:border-b-4 border-b-2 hover:border-b-primary text-nowrap' onClick={()=>{textHandler(data.category)}}>
                    {data.category}
                </div>
            ))
        }
        </div>
    </div>
    </div>
  )
}

export default Search
