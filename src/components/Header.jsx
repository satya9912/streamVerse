import React from 'react'
import { NETFLIX_LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div>
        <img className='absolute bg-gradient-to-b to-black w-48 mx-8 z-2' src={NETFLIX_LOGO} alt='logo'/>
    </div>
  )
}

export default Header