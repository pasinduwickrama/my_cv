import React, { useState } from 'react'
import './Navbar.css'
import Imges from '../img/Imges'
import { FiMenu} from "react-icons/fi";
import { BiSun} from "react-icons/bi";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ changeTheme, currentTheme }) {
  const [active, setActive] = useState("nav_menu");
  const [icon, setIcon] = useState("nav_toggler");
  const navToggle = () => {
    if (active === "nav_menu") {
      setActive("nav_menu nav_active");
    } else setActive("nav_menu");

    // Icon Toggler
    if (icon === "nav_toggler") {
      setIcon("nav_toggler toggle");
    } else setIcon("nav_toggler");
  }; 

  return (
   
    <div className='navbar-body'>
        <div className='container-fluid'>
           <div className='header-navbat'>
           <div className='row'>
               <div className='nav-bar'>
               <div className='nav-header'>
                    <img src={Imges.h1}  />
                </div>
               
                <div className='nav-link'>
                    <p href='#'>HOME</p>
                    <p ><a href='#about'>ABOUT</a></p>
                    <p><a href='#work'>WORK</a></p>
                    <p><a href='#ed'>EDUCATION</a></p>
                    
                    <p><a href='#ac'>ACTIVITIES</a></p>
                    <p><a href='#co' >CONTACT</a></p>
                    <p className='bi' onClick={changeTheme} > {currentTheme === "dark" ? (
                <ImSun className="sun" />
              ) : (
                <BsFillMoonFill className="moon" />
              )}</p>
                </div>
                
                <div className='nav-mobile'>
                <nav className='nav'>
                    <ul className={active}>
                      <li><a href='#' onClick={navToggle}>Home</a></li>
                      <li><a href='#about' onClick={navToggle}>ABOUT</a></li>
                      <li><a href='#work' onClick={navToggle}>WORK</a></li>
                      <li><a href='#ed' onClick={navToggle}>EDUCATION</a></li>
                      <li><a href='#ac' onClick={navToggle}>ACTIVITIES</a></li>
                      <li><a href='#co' onClick={navToggle}>CONTACT</a></li>
                      
                      
                    </ul>
                    <p className='bi' onClick={changeTheme} > {currentTheme === "dark" ? (
                <ImSun size={30} className="sun" />
              ) : (
                <BsFillMoonFill size={30} className="moon" />
              )}</p>
                    <div onClick={navToggle} className={icon}>
                      <div className='line1'></div>
                      <div className='line2'></div>
                      <div className='line3'></div>
                    </div>
                  </nav>
                </div>
               </div>
               
            </div>
           </div>
        </div>
       
    </div>
   
  )
}
