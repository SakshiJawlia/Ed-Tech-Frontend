import React from 'react'
import Button from '../Button/Button'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import Play from '../Forms/Play';
import Primary from '../Forms/Primary';
import Secondary from '../Forms/Secondary';
import Boys from '../Forms/Boys';
import GovernSchool from '../Forms/GovernSchool';
const buttons=[
    {
        text:"Play"
    },
    {
        text:"Primary"
    },
    {
        text:"Secondary"
    },
    {
        text:"Boys"
    },
    {
        text:"Government Schools"
    },

]

const FormData = () => {
    const [formField, setformField] = useState('Play')
    function setFormHandler(currentField){
        setformField(currentField)
    }

  return (
   
      <form 
      className='flex flex-col justify-center items-center gap-12'>
        <div className='flex bg-[#ECECEC] shadow-md w-full md:gap-4 gap-1'>
           {
            buttons.map((data)=>(
                <button type='button'
                className='text-[#575757] font-semibold w-full hover:bg-primary transition-all hover:text-white' onClick={()=>setFormHandler(data.text)}>{data.text}</button>
            ))
           }
        </div>
        <div className='flex flex-col  gap-5 items-center justify-center'>
            {
                formField==='Play' && <Play/>
            }
            {
                formField==='Primary' && <Primary/>
            }
            {
                formField==='Secondary' && <Secondary/>
            }
            {
                formField==='Boys' && <Boys/>
            }
            {
                formField==='Government Schools' && <GovernSchool/>
            }
          
            <button className='px-5 py-2 bg-primary text-white font-semibold flex'>Find School</button>
        </div>
      </form>
   
  )
}

export default FormData
