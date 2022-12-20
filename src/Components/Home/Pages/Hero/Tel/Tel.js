import React from 'react'
import './Tel.css'
import { FcPhone} from "react-icons/fc";

export default function Tel() {
  return (
    <div className='tel-body'>
         <div className='tel-iocn'>
            <FcPhone size={3.5} />
        </div>
       <div className='tel-cri1'></div>
       <div className='tel-cri2'></div>  
    </div>
  )
}
