import React from 'react'
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MenuBar from './MenuBar'

const SmallScreenNav = ({clickHandler}) => {
  return (
        <div className='w-[40%] h-screen bg-white absolute shadow-lg'>
            <div>
                <MenuBar/>
            </div>
        </div>
  )
}

export default SmallScreenNav
