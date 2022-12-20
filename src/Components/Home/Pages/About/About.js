import React from 'react'
import './About.css'
import ProgressBar from "@ramonak/react-progress-bar";
import CountUp from 'react-countup';
import { Audio ,BallTriangle,Bars,Circles,Grid,Hearts,Oval,Puff,Rings,TailSpin,ThreeDots} from  'react-loader-spinner'
import {  GrNode } from 'react-icons/gr'
import { TiHtml5  } from 'react-icons/ti';
import { DiCss3,DiReact } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { BsFillBootstrapFill,BsGithub } from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';

import { SiAdobephotoshop,SiAdobeaftereffects,SiAdobepremierepro,SiMongodb } from 'react-icons/si';


export default function About() {
  
  const gr ={ color:'#30E0A1'}
  const grr ={ color:'#00b82e'}
  const or ={ color:'#FFB545'}
  const re ={ color:'#FA2256'}
  const bl ={ color:'#246CF9'}
  const html ={ color:'#ff590d'}
  const css ={ color:'#246CF9'}
  const bs ={ color:'#72019e'}
  const ract ={ color:'rgb(46, 255, 255)'}
 
    const skills =[
        {
            id: 1,
            sim:(<Circles color="#00BFFF" height={20} width={65}  />),
            logo:(<TiHtml5 size={30} style={html}  />),
            name:'HTML',
            bar:(<ProgressBar
                completed={85}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted"
                labelClassName="label"
              />),
            number:(<CountUp end={90} suffix=" %" style={gr} />),
        },
        {
            id: 2,
            sim:(<Circles color="#00BFFF" height={20} width={65}  />),
            logo:(<DiCss3 size={30} style={css} />),
            name:'CSS',
            bar:(<ProgressBar
                completed={80}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted2"
                labelClassName="label"
              />),
              number:(<CountUp end={70} suffix=" %" style={or} />),
        },
        {
            id: 3,
            sim:(<Circles color="#00BFFF" height={20} width={65}  />),
            logo:(<IoLogoJavascript size={30}  style={or}/>),
            name:'JS',
            bar:(<ProgressBar
                completed={70}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted3"
                labelClassName="label"
              />),
              number:(<CountUp end={60} suffix=" %" style={re} />),
        },
        {
            id: 4,
            sim:(<Circles color="#00BFFF" height={20} width={65}  />),
            logo:(<BsFillBootstrapFill size={30} style={bs} />),
            name:'Bootstrap',
            bar:( <ProgressBar
                completed={80}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted4"
                labelClassName="label"
              />),
              number:(<CountUp end={75} suffix=" %" style={bl} />),
        },
        {
            id: 5,
            sim:(<Circles color="#00BFFF" height={20} width={65}  />),
            logo:(<DiReact size={30} style={ract} />),
            name:'React/Redux',
            bar:(<ProgressBar
                completed={60}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted5"
                labelClassName="label"
              />),
              number:(<CountUp  end={60} suffix=" %" style={gr} />),
        },
        {
          id: 6,
          sim:(<Circles color="#00BFFF" height={20} width={65}  />),
          logo:(<GrNode size={30} style={grr} />),
          name:'Node js',
          bar:(<ProgressBar
              completed={60}
              className="wrapper"
              barContainerClassName="containerr"
              completedClassName="barCompleted15"
              labelClassName="label"
            />),
            number:(<CountUp  end={60} suffix=" %" style={grr} />),
      },

    ]
    const skills2 =[
      {
        id: 1,
        sim:(<Circles color="#00BFFF" height={20} width={65}  />),
        logo:(<SiMongodb size={30} style={grr}  />),
        name:'Mongodb',
        bar:(<ProgressBar
            completed={85}
            className="wrapper"
            barContainerClassName="containerr"
            completedClassName="barCompleted16"
            labelClassName="label"
          />),
        number:(<CountUp end={60} suffix=" %" style={grr} />),
    },
      {
          id: 2,
          sim:(<Circles color="#00BFFF" height={20} width={65}  />),
          logo:(<SiAdobephotoshop size={30} style={bl}  />),
          name:'Photo Shop',
          bar:(<ProgressBar
              completed={85}
              className="wrapper"
              barContainerClassName="containerr"
              completedClassName="barCompleted6"
              labelClassName="label"
            />),
          number:(<CountUp end={45} suffix=" %" style={gr} />),
      },
      {
          id: 3,
          sim:(<Circles color="#00BFFF" height={20} width={65}  />),
          logo:(<SiAdobeaftereffects size={30} style={bs} />),
          name:'After Effects',
          bar:(<ProgressBar
              completed={80}
              className="wrapper"
              barContainerClassName="containerr"
              completedClassName="barCompleted7"
              labelClassName="label"
            />),
            number:(<CountUp end={30} suffix=" %" style={or} />),
      },
      {
          id: 4,
          sim:(<Circles color="#00BFFF" height={20} width={65}  />),
          logo:(<SiAdobepremierepro size={30}  style={bs}/>),
          name:'Premiere',
          bar:(<ProgressBar
              completed={70}
              className="wrapper"
              barContainerClassName="containerr"
              completedClassName="barCompleted8"
              labelClassName="label"
            />),
            number:(<CountUp end={20} suffix=" %" style={re} />),
      },
      {
          id: 5,
          sim:(<Circles color="#00BFFF" height={20} width={65}  />),
          logo:(<BsGithub size={30} style={or} />),
          name:'Git hub',
          bar:( <ProgressBar
              completed={80}
              className="wrapper"
              barContainerClassName="containerr"
              completedClassName="barCompleted9"
              labelClassName="label"
            />),
            number:(<CountUp end={55} suffix=" %" style={bl} />),
      },
      {
          id: 6,
          sim:(<Circles color="#00BFFF" height={20} width={65}  />),
          logo:(<FiFigma size={30} style={ract} />),
          name:'FiFigma',
          bar:(<ProgressBar
              completed={60}
              className="wrapper"
              barContainerClassName="containerr"
              completedClassName="barCompleted10"
              labelClassName="label"
            />),
            number:(<CountUp  end={10} suffix=" %" style={gr} />),
      },

  ]

  return (
    <section id='about'>
    <div className='about-body'>
        <div className='headerab'>
          <h1 className='headerabh'>ABOUT </h1>
        </div>
        <div className='about-header text-center'>
            
            <h2>Intend to build my career with leading corporate of stimulating environment which will help me to explore myself fully and realize my potential.</h2>
            
        </div>
       
        <div className='skil'>
           <div className='skil-one'>
                <div className='skil-header'>
                        <h2 className='text-center'>TECHNICAL SKILLS</h2>
                </div>
                {skills.map((skills) =>(
                    <div id={skills.id}>
                        <div className='skil-list'>
                        <div className='skilname'><p>{skills.sim}</p> <p>{skills.logo}</p><p>{skills.name}</p></div>
                          <div className='skilbar'>{skills.bar}</div>
                          <div className='skilnumber'>{skills.number}</div>
                          
                        </div>
                    </div>
                ))}
           </div>
           <div className='skil-two'>
           <div className='skil-header'>
                        <h2 className='text-center'>TECHNICAL SKILLS</h2>
                </div>
                {skills2.map((skills2) =>(
                    <div id={skills2.id}>
                        <div className='skil-list'>
                        <div className='skilname'><p>{skills2.sim}</p> <p>{skills2.logo}</p><p >{skills2.name}</p></div>
                          <div className='skilbarr'>{skills2.bar}</div>
                          <div className='skilnumber'>{skills2.number}</div>
                          
                        </div>
                    </div>
                ))}
           </div>
        </div>
    </div>
    </section>
  )
}
