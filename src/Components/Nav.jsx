import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdContact, IoMdSettings } from 'react-icons/io';
import './Nav.css';

const Nav = () => {
  return (
    <div className='navvv'>
        <div className='left'>
          <p> Mon-Fri : 09:00-19:00 </p>
        </div>

        <div className='right'>
            <AiOutlineSearch/> &nbsp;&nbsp;&nbsp;&nbsp;
            <IoMdContact/> &nbsp;&nbsp;&nbsp;&nbsp;
            <IoMdSettings/>
        </div>
      
    </div>
  )
}

export default Nav
