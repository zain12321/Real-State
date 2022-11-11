import React from 'react'
import {   Div, Icon, P, Span, Wrapper } from '../Properties/styles.js'
import { ReactComponent as LocationSvg } from '../../assets/images/pin.svg'
function Properties({image, title, desc}) {
  return (
      <Wrapper>
         <Div>
         <img  src={image} className='images' alt="" />
          <P>{title}</P>
           <Span>{desc}</Span>
           <Icon>
            <LocationSvg/>
           </Icon>
         </Div>
      </Wrapper>
      
  )
}

export default Properties