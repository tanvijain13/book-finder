import React from 'react';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import './Header.css'
const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar/>
        <div className='header-content flex flex-c-text-center text-white'>
          <h2 className='header-title text-capitalization'>Discover your next favorite book</h2><br />
          <Search />
        </div>
      </header>
    </div>
  )
}

export default Header