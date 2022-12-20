import React, { useState, useEffect } from "react";
import './Home.css'
import About from './Pages/About/About'
import Activites from './Pages/Activites/Activites'
import Education from './Pages/Education/Education'
import Hero from './Pages/Hero/Hero'
import Navbar from './Pages/Navbar/Navbar'
import scrollreveal from "scrollreveal";
import Work from "./Pages/Work/Work";
import Contact from "./Pages/contact/Contact";


export default function Home() {

  const [theme, setTheme] =useState("light");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "-80px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .mohero-right,
        .animati-name,
        .h,
        .hero-right,
        .con-r,
        .con-l,
        .f-l,
        .f-r,
        .headerabh,
        .about-header,
        
        .skil-one,
        .skil-two,
        .et,
        .aibody-list,
        .olbody-list,
        
        .pro,
        .other-list,
        .other-listt,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
  }, 1500);

 
  return (
    <div data-theme={theme} className='home-body'>
      <Navbar changeTheme={changeTheme} currentTheme={theme}  />
      <Hero  />
      <About />
      <Work />
      <Education />
      <Activites />
      <Contact />
      
    </div>
  )
}
