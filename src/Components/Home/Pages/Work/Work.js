import React from 'react'
import './Other.css'
import { Audio ,BallTriangle,Bars,Circles,Grid,Hearts,Oval,Puff,Rings,TailSpin,ThreeDots} from  'react-loader-spinner'
export default function Other() {
  return (
    <div className='other-body'>
       <div>
       <div className='othe-hede'>
        <div className='pro'>
       
        <h2 className='text-center '> WORK Link</h2>
       
        </div>
       </div>

      

       <div className='other-list'>
            <div className='cirr'>
             <Circles color="#00BFFF" height={80} width={30}/>
              <div className='cir-p'>
              <a href='https://shop-appp.vercel.app'>
              <h5>mern stack </h5>
              </a>
              </div>
              
            </div>

            <div className='cirr'>
             <Circles color="#00BFFF" height={80} width={30}/>
              <div className='cir-p'>
              
              <a href='https://effulgent-madeleine-c1cabc.netlify.app/'>
              <h5>App </h5>
              </a>
              </div>
              
            </div>

            <div className='cirr'>
             <Circles color="#00BFFF" height={80} width={30}/>
              <div className='cir-p'>
              <a href='https://sparkly-narwhal-d77ee0.netlify.app'>
              <h5>DashBord </h5>
              </a>
              </div>
              
            </div>
           
            
        </div>
        <div className='other-list'>
         <div className='cirr'>
             <Circles color="#00BFFF" height={80} width={30}/>
              <div className='cir-p'>
             
              <a href='https://jovial-sunburst-bcfb4b.netlify.app'>
              <h5>Web Site 01 </h5>
              </a>
              </div>
              
            </div>
            <div className='cirr'>
             <Circles color="#00BFFF" height={80} width={30}/>
              <div className='cir-p'>
              <a href='https://sage-horse-65192a.netlify.app'>
              <h5>Web Site 02 </h5>
              </a>
              </div>
              
            </div>

            </div>
       </div>
       
    </div>
  )
}
