import React from 'react'
import { H2, P, Span } from '../Area/styles'
import Slider from './Slider'
import { Btn, Buttons, Container, Main } from './styles'
import Rent1 from '../../assets/images/rent/rent1.png'
import Slider2 from '../../assets/images/rent/Slider2.png'
import Slider3 from '../../assets/images/rent/Slider3.png'
import Slider4 from '../../assets/images/rent/Slider4.png'
import Slider5 from '../../assets/images/rent/Slider5.png'
import {ReactComponent as ArrowLeft} from '../../assets/images/ArrowLeft.svg'
import {ReactComponent as ArrowRight} from '../../assets/images/ArrowRight.svg'



function Rent() {
  return (
    <Container>
         <P>
       <H2>Propertice by Area</H2> 
        <Span>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </Span>
        </P>
        <Main>
        <Slider image={Rent1}  button active/>
        <Slider image={Slider2}  />
        <Slider image={Slider3}  button />
        <Slider image={Slider4}  />
        <Slider image={Slider5} item />

        </Main>
        <Buttons>
                <Btn>
                   <ArrowLeft/>
                </Btn>
                <Btn primary>
                <ArrowRight/>
                </Btn>
               </Buttons>
    </Container>
  )
}

export default Rent