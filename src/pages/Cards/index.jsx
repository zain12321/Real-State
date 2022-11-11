import React from 'react'
import { Container, Div, H1, Image, Main, Name, P, Price, Section, Wrapper } from './styles'
import { ReactComponent as Icons } from "../../assets/images/three.svg"
import { ReactComponent as Detail } from "../../assets/images/detail.svg"

function Cards({person, image}) {
  return (
    <Container>
        <Wrapper>
        <Main>
        <Section>
<img src={person} alt='' className='picture' />
<Name className='name'>Jenny Wilson</Name>
<Icons className='icons'/>
</Section>
<H1>92 ALLIUM PLACE, ORLANDO FL 32827</H1>
<P>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.</P>
<P primary>Vestibulum ante ipsum primis in faucibus orci luctus et
 ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum 
 ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales 
 ultrices nulla blandit...readmore.</P>
<Price>$ 590,693</Price>
        </Main>
<Image>
<img src={image} alt='' className='Home' />
<Div>
    <Detail/>
</Div>
</Image>
        </Wrapper>
    </Container>
  )
}

export default Cards