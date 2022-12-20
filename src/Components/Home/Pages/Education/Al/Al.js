import React from 'react'
import './Al.css'
import { Audio ,BallTriangle,Bars,Circles,Grid,Hearts,Oval,Puff,Rings,TailSpin,ThreeDots} from  'react-loader-spinner'
export default function Al() {
  const ai =[
    {
      id:1,
      sim:(<Circles color="#00BFFF" height={20} width={65}  />),
      name:'Combined Mathematics',
      passs:'C'
    },
    {
      id:2,
      sim:(<Circles color="#00BFFF" height={20} width={65}  />),
      name:'Physics',
      passs:'s',
    },
    {
      id:3,
      sim:(<Circles color="#00BFFF" height={20} width={65}  />),
      name:'Chemistry',
      passs:'s',
    },
    {
      id:4,
      sim:(<Circles color="#00BFFF" height={20} width={65}  />),
      name:'General English ',
      passs:'s',
    },
  ]

  const ol =[
    {
      id:1,
      sim:(<Circles color="#00BFFF" height={20} width={65}  />),
      name:'Sinhala',
      pass:'B',
    },
    {
      id:2,
      sim:(<Circles color="#00BFFF" height={20} width={65}  />),
      name:'Mathematics',
      pass:'A',
    },
    {
      id:3,
      sim:(<Circles color="#00BFFF" height={20} width={65}  />),
      name:'Science ',
      pass:'B',
    },
    {
      id:4,
      sim:(<Circles color="#00BFFF" height={20} width={65}  />),
      name:'English',
      pass:'C',
    },
  
    {
      id:5,
      sim:(<Circles color="#00BFFF" height={20} width={65}  />),
      name:'Buddhism',
      pass:'B',
    },
   
  ]

  const ol2 = [
    {
      id:1,
      sim:(<Circles color="#00BFFF" height={20} width={65}  />),
      name:'History ',
      pass:'B',
    },
    {
      id:2,
      sim:(<Circles color="#00BFFF" height={20} width={65}  />),
      name:'Geography',
      pass:'B',
    },
    {
      id:3,
      sim:(<Circles color="#00BFFF" height={20} width={65}  />),
      name:'Health ',
      pass:'A',
    },
   
    {
      id:4,
      sim:(<Circles color="#00BFFF" height={20} width={65}  />),
      name:'Music',
      pass:'A',
    },
  ]
  return (
    <section id='ed'>
    <div className='aihea-body'>
      <div className='edu-header'>
        <h1 className='et'>education qualification</h1>
      </div>
      <div className='ai-body'>
      
        <div className='aibody-list'>
        <div className='ai-header'>
        <br></br>
          <h2 className='text-center at'>G.C.E. A/L – 2016 <span>Mahanama College </span></h2>
          <br></br>
        </div> 
        {ai.map((ai) =>(
          <div id={ai.id}>
            <div className='al-list'>
              <div>
              <p className='al-pass'>{ai.sim}{ai.name}</p>
              </div>
              <div ><p className='cc'>{ai.passs}</p></div>
            </div> 
          </div>
        ))} 
        </div>

        <div className='olbody-list'>
        <div className='ol-header'>
        <br></br>
          <h2 className='text-center at'>G.C.E. O/L – 2013 <span>Mahanama College </span></h2>
          <br></br>
        </div>
      <div className='olpass-list'>
      <div className='one-ol '>
        {ol.map((ol) =>(
          <div id={ol.id}>
            <div className='ol-list'>
              <p className='al-pass'>{ol.sim}{ol.name}</p>
              <p className='cc'>{ol.pass}</p>
            </div>
        </div>
        ))}
        </div>
        <div className='two-ol'>
          {ol2.map((ol2)=>(
            <div id={ol2.id}>
              <div className='ol-list'>
                <p className='al-pass'>{ol2.sim}{ol2.name}</p>
                <p className='cc'>{ol2.pass}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
      </div>
    </div>
    </section>
  )
}
