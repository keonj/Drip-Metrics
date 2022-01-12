import React from "react";
import logo from "../assets/logo.jpg";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       <img height="80" src={logo} alt="Agri-Edge logo"></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="nav-link" to="/moisture">
               Moisture
             </NavLink>
           </li>
           <li>
             <NavLink className="nav-link" to="/sensor-images">
               Sensor Images
             </NavLink>
           </li>
           <li>
             <NavLink className="nav-link" to="/map">
               Map
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}