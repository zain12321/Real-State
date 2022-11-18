import React from 'react'
import { Container, P } from '../styles'
import { Button, Div, Main, Section,  Span, Text, Wrapper } from './styles'
import { ReactComponent as LocationSvg } from '../../../assets/images/pin.svg'
import { ReactComponent as FourArrow } from "../../../assets/images/FourArrow.svg"

function Slider({button, active, image}) {
  return (
    <Container>
        <Wrapper>
             <img src={image} alt="" className='Rent' />
             <Div>
              <Button>
              {button ? <P>
                Hot offer
              </P> : ''}
              </Button>
              <Section>
              {active ? <Span>
                view Detail
              </Span> : ''}
              </Section> 

                <Main>
                <LocationSvg className={`Location ${active ? '' : 'location'} `}/>
                       <Text className={`Location ${active ? '' : 'location'} `}>Washington</Text>
                       <FourArrow className={`Location ${active ? '' : 'location'} `}/>
                       <Text className={`Location ${active ? '' : 'location'} `}>12000</Text>
                
                </Main>
             </Div>
        </Wrapper>
              
    </Container>
  )
}

export default Slider