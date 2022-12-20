import React from 'react'
import Email from './Email'
import './Email.css'
import { FcFeedback} from "react-icons/fc";

export default function Emac() {
  return (
    <div>
        <div className='tel-body'>
         <div className='tel-iocn'>
            <FcFeedback  size={2.5}/>
        </div>
       <div className='tel-cri1'></div>
       <div className='tel-cri2'></div>  
    </div>
    </div>
  )
}
