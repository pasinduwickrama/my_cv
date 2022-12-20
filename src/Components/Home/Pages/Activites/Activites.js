import React from 'react'
import './Activites.css'
import { Audio ,BallTriangle,Bars,Circles,Grid,Hearts,Oval,Puff,Rings,TailSpin,ThreeDots} from  'react-loader-spinner'
export default function Activites() {
  return (
    <section id='ac'>
    <div className='acti-body'>


<div className='other-body'>
    
     <div className='othe-hede'>
        <h2 className='text-center pro'>EXTRA CURRICULAR ACTIVITIES</h2>
       </div>
    

      

       <div className='other-listt'>
            <div className='cir'>
             <BallTriangle color="#00BFFF" height={80} width={30}/>
              <div className='cir-p'>
                <h5>Rugger </h5>
              </div>
              
            </div>

            <div className='cir'>
             <BallTriangle color="#00BFFF" height={80} width={30}/>
              <div className='cir-p'>
              <h5>Scouting  </h5>
              </div>
              
            </div>

            <div className='cir'>
             <BallTriangle color="#00BFFF" height={80} width={30}/>
              <div className='cir-p'>
              <h5>Cadeting  </h5>
              </div>
              
            </div>
            
            <div className='cir'>
             <BallTriangle color="#00BFFF" height={80} width={30}/>
              <div className='cir-p'>
              <h5>I Love Walking, hiking  </h5>
              </div>
              
            </div>
            
            <div className='cir'>
             <BallTriangle color="#00BFFF" height={80} width={30}/>
              <div className='cir-p'>
              <h5>Cycling  </h5>
              </div>
              
            </div>
           
            
        </div>
       
       
    </div>
        
    </div>
    </section>
  )
}
