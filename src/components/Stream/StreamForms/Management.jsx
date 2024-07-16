import React from 'react'

const Management = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 w-fit text-secondary font-semibold hover:text-secondary outline-none select-none
    '>
        <select className='border border-secondary px-10 py-3'>
            <option value>Choose your exam</option>
            <option value>CAT</option>
            <option value>ZAT</option>
        </select>
        <select className='border border-secondary px-10 py-3'>
            <option value="">Business Schools</option>
            <option value="">FSI</option>
            <option value="">MDI</option>
            <option value="">IIM</option>
        </select>
        <select className='border border-secondary px-10 py-3'>
            <option value="">Coaching Centers</option>
            <option value="">B-School GGN</option>
        </select>
    </div>
  )
}

export default Management
