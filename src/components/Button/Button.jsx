import React from 'react'


const Button = ({children,variant}) => {
  return (
    <button className={`text-white px-9 py-4 font-bold flex gap-4 ${variant==='hovered' ? 'bg-primary' : 'bg-transparent border-2 border-white'}`}>{children}</button>
  )
}

export default Button
