import React from 'react'
import navlinks from '../Navlinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

const MenuBar = () => {
  return (
    <div className='h-[100vw]'>
        <div className='flex flex-col gap-16 font-semibold items-center my-10'>
          {
            navlinks.map((link)=>(
              <div className='hover:cursor-pointer group relative md:mx-4 mx-2'>
                <div className='flex gap-2 hover:text-primary'>
                  <div className='md:text-nowrap text-wrap '>{link.title}</div>
                    <div>
                      <FontAwesomeIcon icon={faCaretDown}/>
                  </div>
                </div>
                <ul className="group-hover:block hidden bg-white md:text-nowrap text-wrap">
                  {
                    link.sublinks.map((list)=>(
                      <li className='hover:text-primary md:my-4 my-3'>
                        <a href={list.href}>{list.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }

        </div>
    </div>
  )
}

export default MenuBar
