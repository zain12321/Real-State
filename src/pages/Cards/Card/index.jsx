import React from 'react'
import Cards from '..'
import { Container } from '../../../components/Home/styles'
import { H1, Image, Main, P, Price, Section, Wrapper, Div, Name } from './styles'
import { Select } from './styles'
import { ReactComponent as Icons } from "../../../assets/images/three.svg"
import { ReactComponent as Detail } from "../../../assets/images/detail.svg"
import Person1 from '../../../assets/images/person3.png'
import Person2 from '../../../assets/images/per2.png'
import Person3 from '../../../assets/images/per3.png'
import Home1 from '../../../assets/images/Page1.png'
import Home2 from '../../../assets/images/Page2.png'


function Card() {
  return (
    <Container>
        <Cards image={Home1} person={Person1}/>
    <Select>
        <Wrapper>
        <Image>
<img src={Home2} alt='home1' className='Home' />
<Div>
    <Detail/>
</Div>
</Image>
        <Main>
        <Section>
<img src={Person2} alt='picture' className='picture' />
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

        </Wrapper>
    </Select>
        <Cards image={Home2} person={Person3}/>

    </Container>
  )
}

export default Card