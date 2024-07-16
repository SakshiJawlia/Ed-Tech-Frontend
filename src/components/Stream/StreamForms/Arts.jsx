import React from 'react'

const Arts = () => {
  return (
<div className='grid lg:grid-cols-2 grid-cols-1 gap-4 w-fit text-secondary font-semibold hover:text-secondary outline-none select-none
    '>
        <select className='border border-secondary px-10 py-3'>
            <option value>Important Exams</option>
            <option value>UPSC CSE</option>
            <option value>PSC</option>
        </select>
        <select className='border border-secondary px-10 py-3'>
            <option value="">Realted Courses</option>
            <option value="">ADDA 247</option>
            <option value="">Chanakya Academy</option>
        </select>
        <select className='border border-secondary px-10 py-3'>
            <option value="">Career Options</option>
            <option value="">Public Sector</option>
            <option value="">State PSC's</option>
        </select>
    </div>
  )
}

export default Arts
