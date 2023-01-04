import React from 'react'
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
         <h1>My Dashboard</h1>
      <nav>
        <Link to="orders">My Orders</Link> {" "}
        <Link to="details">My Details</Link> {" "}
        <Link to="settings">Settings</Link>
      </nav>

      <div className='orders'>
        <div style={{width:250, height: 50, border:"2px solid green", margin:10}}>
          <h1 style={{color:"green", fontSize:"22px"}}> Plz give order sir.</h1>
        </div>
      </div>

      <div id='details'>
        <div style={{width:350, height: 50, border:"2px solid blue", margin:10}}>
          <h1 style={{color:"blue", fontSize:"22px"}}>Sir your order details are here.</h1>
        </div>
      </div>

      <div id='settings'>
        <div style={{width:600, height: 50, border:"2px solid grey" , margin:10}}>
          <h1 style={{color:"grey", fontSize:"22px"}}>Something is wrong at somewhere due to settings.</h1>
        </div>
      </div>
      
    </div>
  )
}
