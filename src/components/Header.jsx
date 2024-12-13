import React from 'react'
import { netflixLogo } from '../Utils/Constrains'
const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src={netflixLogo} alt="logo" />
    </div>
  )
}

export default Header
