import React from 'react'
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className='Footer'>
        <h1>My App's Footer</h1>
      <nav>
        <Link to="/">Footer(Home)</Link> |{" "}
        <Link to="about">About</Link> |{" "}
        <Link to="contact">Contact Us</Link>
      </nav>
      
    </div>
  )
}
