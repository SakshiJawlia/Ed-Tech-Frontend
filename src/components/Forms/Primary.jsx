import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

const Primary = () => {
    const [date, setdate] = useState(new Date())
    return (
      <div className=''>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                  <input type="text" 
                          placeholder='Name of School'
                          className='border border-secondary md:px-5 px-3 md:py-2 py-1'
                      />
                  <select className='border border-secondary md:px-5 px-3 md:py-2 py-1'>
                          <option value="">Ratings</option>
                          <option value="">1</option>
                          <option value="">3</option>
                          <option value="">5</option>
                  </select>
                  <select className='border border-secondary md:px-5 px-3 md:py-2 py-1'>
                      <option value="">Board</option>
                      <option value="">CBSE</option>
                      <option value="">CISCE</option>
                      <option value="">IB</option>
                  </select>
                  <input type="text" 
                    placeholder='Enter your play school grade'
                    className='border border-secondary px-5 py-3'
                  />
                  <DatePicker className='border border-secondary md:px-5 px-3 md:py-2 py-1' selected={date} onChange={(date)=>setdate(date)}
                  />
              </div>
      </div>
    )
}

export default Primary
