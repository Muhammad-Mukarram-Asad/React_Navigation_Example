import React from 'react'
import { Link } from 'react-router-dom'
import '../header.css';

export default function Header() {

  return (
    <div className='header'>
        <h1>Header Navigation</h1>
      <nav>
        <Link className="nav_link" to="/">Home</Link> 
        <Link className="nav_link" to="about">About Us</Link>
        <Link className="nav_link" to="contact">Contact Us</Link>
        <Link className="nav_link" to="/dashboard">Dashboard</Link>

      </nav>
      
    </div>
  )
}
