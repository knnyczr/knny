import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.svg'

export default function Nav(){
  return(
    <nav>
        <img className="logo" src={logo} alt="logo" />
      <ul>
        <li><Link to='/'>works</Link></li>
        <li><Link to='/about'>about</Link></li>
      </ul>
      <div className="line"></div>
    </nav>
  )
}
