import React from 'react'

const HotelManagement = () => {
  return (
<div className='grid lg:grid-cols-2 grid-cols-1 gap-4 w-fit text-secondary font-semibold hover:text-secondary outline-none select-none
    '>
        <select className='border border-secondary px-10 py-3'>
            <option value>Cuisines known</option>
            <option value>Indian</option>
            <option value>Italian</option>
        </select>
        <select className='border border-secondary px-10 py-3'>
            <option value="">list of n colleges</option>
            <option value="">IIHM</option>
        </select>
        <select className='border border-secondary px-10 py-3'>
            <option value="">Courses</option>
            <option value="">Hospitality Management</option>
            <option value="">Chef Courses</option>
        </select>
    </div>
  )
}

export default HotelManagement
