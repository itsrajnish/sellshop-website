import React from 'react'
import './Box.css'


const Box = props => {
  return (
    <>
    <div className='boxx'>
    <img src={props.i}/><br/>
     <h4>{props.tittle}</h4> 
     <p>{props.doller}</p>
    </div>
    </>
  )
}



export default Box
