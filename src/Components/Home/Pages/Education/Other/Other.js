import React from 'react'
import './Other.css'
import { Audio ,BallTriangle,Bars,Circles,Grid,Hearts,Oval,Puff,Rings,TailSpin,ThreeDots} from  'react-loader-spinner'
export default function Other() {
  return (
    <div className='other-body'>
       <div>
       <div className='othe-hede'>
        <div className='pro'>
       
        <h2 className='text-center '> PROFESSIONAL QUALIFICATIONS</h2>
       
        </div>
       </div>

      

       <div className='other-list'>
            <div className='cirr'>
             <Circles color="#00BFFF" height={80} width={30}/>
              <div className='cir-p'>
                <h5>Diploma In Multimedia - Wijeya Graphics </h5>
                <p>(Photoshop,Maya,After Effect,Premiere)</p>
              </div>
              
            </div>

            <div className='cirr'>
             <Circles color="#00BFFF" height={80} width={30}/>
              <div className='cir-p'>
              <h5>Certificate In Web Development – UCSC  </h5>
              <p>(Dynamic web application)</p>
              </div>
              
            </div>

            <div className='cirr'>
             <Circles color="#00BFFF" height={80} width={30}/>
              <div className='cir-p'>
              <h5>Full Stack Developer - University of Moratuwa  </h5>
              <p>(Html,Css,Angular,Bootstrap)</p>
              </div>
              
            </div>
           
            
        </div>
        <div className='other-list'>
         <div className='cirr'>
             <Circles color="#00BFFF" height={80} width={30}/>
              <div className='cir-p'>
              <h5>Computing & Software Engineering in Degree -ICBT CAMPUS  </h5>
              </div>
              
            </div>
            <div className='cirr'>
             <Circles color="#00BFFF" height={80} width={30}/>
              <div className='cir-p'>
              <h5>YouTube Tutorial  </h5>
              <p>(Html,Css,React,Redux,Node js,Mongodb,Bootstrap,Any..)</p>
              </div>
              
            </div>

            </div>
       </div>
       
    </div>
  )
}
