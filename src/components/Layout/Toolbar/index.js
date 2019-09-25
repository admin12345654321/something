import React from 'react'
import { Link } from 'react-router-dom'
import './Toolbar.scss'

const Toolbar = () => {
  return (
    <header className='header'>
      <div>THE LOGO</div>
      <div className='header__placeholder'></div>
      <ul className='header__nav'>
        <li className='header__nav-item'>
          <Link to='/' className='header__nav-link'>
            <i class='fas fa-home'></i>
            <span>Home</span>
          </Link>
        </li>
        <li className='header__nav-item'>
          <Link to='/profile' className='header__nav-link'>
            <i class='fas fa-user'></i> <span>Profile</span>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Toolbar
