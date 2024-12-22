import React from 'react'
import { Link } from 'react-router'

const Button = ({name}) => {

    
  return (
    <div to="/signup" className='bg-black rounded-lg sm:block text-white p-5 sm:w-36 w-72 lg:w-[200px]  mt-2 hover:opacity-90 text-center'>
        <Link to="/signup">{name}</Link>
        </div>
  )
}

export default Button