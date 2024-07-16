import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown,faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import SmallScreenNav from './Responsive/SmallScreenNav'
import { useState } from 'react'
import navlinks from './Navlinks'



const NavBar = () => {

  const [clicked, setclicked] = useState(false)
  function clickHandler(){
    setclicked(!clicked)
  }

  return (
    <div className='w-full py-6 relative'>
    <div className='flex container mx-auto justify-between items-center'>
      <div className='md:w-fit w-40'>
        <img src="/images/logo1.png" alt="" />
      </div>
      <div className='hidden lg:flex gap-14 items-center'>
        <div className='flex gap-16 font-semibold'>
          {
            navlinks.map((link)=>(
              <div className='hover:cursor-pointer group relative'>
                <div className='flex gap-2 hover:text-primary'>
                  <div className='text-nowrap '>{link.title}</div>
                    <div>
                      <FontAwesomeIcon icon={faCaretDown}/>
                  </div>
                </div>
                <ul className="group-hover:block hidden absolute bg-white text-nowrap p-4">
                  {
                    link.sublinks.map((list)=>(
                      <li className='p-2 hover:text-primary'>
                        <a href={list.href}>{list.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }

        </div>
        <div className='flex gap-10'>
          <a href="#login">
            <img src="/images/user1.png" alt=""  className='w-7 h-7'/>
          </a>
          <a href="#search">
            <img src="/images/search1.png" alt="" className='w-7 h-7'/>
          </a>
        </div>
      </div>
      <div className='lg:hidden block border border-secondary p-3' onClick={clickHandler}>
      {
        clicked ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/>
      }
      </div>
    </div>

    {
      clicked && <SmallScreenNav clickHandler={clickHandler}/>
    }
    </div>
  )
}

export default NavBar
