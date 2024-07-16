import React from 'react'

const Medical = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 w-fit text-secondary font-semibold hover:text-secondary outline-none select-none
    '>
        <select className='border border-secondary px-10 py-3'>
            <option value>Important Exams</option>
            <option value>NEET</option>
            <option value>BDS</option>
        </select>
        <select className='border border-secondary px-10 py-3'>
            <option value="">list of n colleges</option>
            <option value="">View All</option>
        </select>
        <select className='border border-secondary px-10 py-3'>
            <option value="">Realted Courses</option>
            <option value="">NEET-Crash Course</option>
            <option value="">BDS Crash Course</option>
        </select>
        <select className='border border-secondary px-10 py-3'>
            <option value="">Coaching Centers</option>
            <option value="">Aakash</option>
        </select>
    </div>
  )
}

export default Medical
