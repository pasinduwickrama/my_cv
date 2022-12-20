import React from 'react'
import './Hero.css'
import Typewriter from 'typewriter-effect';
import Imges from '../img/Imges';
import ProgressBar from "@ramonak/react-progress-bar";
import Tel from './Tel/Tel';
import Email from './Email/Email';
import Emac from './Email/Emac';
import Loca from './Email/Loca';
import Water from './Water/Water';
import Finge from './Water/Finge';
import Name from './Water/Name';
import { IoLogoLinkedin,IoLogoInstagram, IoLogoReact} from 'react-icons/io';
import { BsFacebook,BsFillBootstrapFill } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { SiCss3 } from 'react-icons/si';

export default function Hero() {
    const skills =[
        {
            id: 1,
            name:'HTML',
            bar:'bar',
            number:'90'
        },
        {
            id: 2,
            name:'CSS',
            bar:'bar',
            number:'75'
        },
        {
            id: 3,
            name:'JS',
            bar:'bar',
            number:'70'
        },
        {
            id: 4,
            name:'Bootstrap',
            bar:( <ProgressBar
                completed={80}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted"
                labelClassName="label"
              />),
            number:'70'
        },
        {
            id: 5,
            name:'React',
            bar:(<ProgressBar
                completed={80}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted"
                labelClassName="label"
              />),
            number:'80'
        },

    ]
  return (
    <section id="hero">
    <div className='hero-bady' >
        <div className='container-fluid'>
            <div className='row'>
                <div className='hero-name'>

                <div className='mohero-right'>
                        <div className='mimg-box'>
                            <img src={Imges.h1}/>
                        </div>
                    </div>
                    <div className='hero-left'>
                        
                        <div className='animati-name'>
                         <div className='wel'>WELCOME TO MY WORLD</div>
                            <h1>Hi, I'm <span>Pasindu</span></h1>
                            <h2>A <span> <Typewriter
                                    options={{
                                        strings: ['Front-end Developer.....','Back-end Developer.....', 'Full Stack Developer.....'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    /></span></h2>
                            <p>Intend to build my career with leading corporate of stimulating 
                                environment which will help me to explore myself fully and realize my 
                                potential.</p>
                            
                        </div>
                        <hr className='h'></hr>
                        <div className='con-ifo'>
                           <div className='con-r'>
                           <div className='header-co'>
                                    <h2>PERSIONAL INFORMATION</h2>
                                </div>
                                <div className='co-phonew'>
                                <div className='tel-herr'>
                                  <Name />
                                    </div>
                                    <p>Pasindu Nawod Dananjan Wickramasinghe</p>
                                </div>
                                <div className='co-phonew'>
                                <div className='tel-herr'>
                                  <Water />
                                    </div>
                                    <p>Male</p>
                                </div>
                                <div className='co-phonew'>
                                <div className='tel-herr'>
                                  <Finge />
                                    </div>
                                    <p>972203254V</p>
                                </div>
                           </div>
                           <div className='con-l'>
                           <div className='header-co'>
                                    <h2>CONTACT INFO</h2>
                                </div>
                                <div className='co-phone'>
                                    <div className='tel-her'>
                                        <Tel />
                                    </div>
                                    <p>071-3681505</p>
                                </div>
                                <div className='co-phonew'>
                                <div className='tel-herr'>
                                <a href='#co'><Emac /></a>
                                    </div>
                                    
                                    <a href='#co'><p className='email'>pasinduwickramasinghe00@gmail.com</p></a>
                                </div>
                                <div className='co-phone'>
                                <div className='tel-herr'>
                                <Loca />
                                    </div>
                                    <p>336/E, Christ King Road, Batagama North, Ja-Ela</p>
                                </div>
                           </div>
                        </div>
                       
                        <div className='find-list'>
                            <div className='f-l'>  
                              <p>FIND WITH ME</p> 
                              <div className='socil-bu'>
                              <button> < BsFacebook size={30} /></button>
                              <button><IoLogoLinkedin size={30} /></button>
                              <button><IoLogoInstagram size={30} /></button>
                              </div>
                            </div>
                            <div className='f-r'>
                                <p>BEST SKILL ON</p>
                                <div className='ski-bu'>
                                <button><FaReact size={30} /></button>
                                <button><BsFillBootstrapFill size={30}  /></button>
                                <button><SiCss3 size={30}  /></button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='hero-right'>
                        <div className='img-box'>
                            <img src={Imges.h1}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </section>
  )
}
