import React from 'react'
import PropTypes from 'prop-types'
import './Boximg.css'

const Boximg = props => {
  return (
   <>
   <div className='boximg'>
    <img src={props.im} />
    <h4>{props.heading}</h4>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Cupiditate molestias ducimus quia, aperiam ab eveniet tenetur nesciunt consequuntur... </p>

    <div className='last'>
     <h6>JAN 11 23</h6>
     <a href='#'>Read More</a>
    </div>

   </div>
   
   
   </>
  )
}




export default Boximg
