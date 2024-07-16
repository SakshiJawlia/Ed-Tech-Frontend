import React from 'react'

const Engineering = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 w-fit text-secondary font-semibold hover:text-secondary outline-none select-none
    '>
        <select className='border border-secondary px-10 py-3'>
            <option value>Important Exams</option>
            <option value>JEE-Advance</option>
            <option value>JEE-Mains</option>
        </select>
        <select className='border border-secondary px-10 py-3'>
            <option value="">list of n colleges</option>
            <option value="">View All</option>
        </select>
        <select className='border border-secondary px-10 py-3'>
            <option value="">Realted Courses</option>
            <option value="">JEE-Crash Course</option>
            <option value="">IIT-Crash Course</option>
        </select>
        <select className='border border-secondary px-10 py-3'>
            <option value="">Coaching Centers</option>
            <option value="">FIITJEE</option>
        </select>
    </div>
  )
}

export default Engineering
