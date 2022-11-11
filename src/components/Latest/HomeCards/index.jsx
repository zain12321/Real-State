import React from 'react'
import { Container, Div, H1, Main, Name, Price, Section, Span, Wrapper } from './styles'
import { ReactComponent as Car } from "../../../assets/images/Car.svg"
import { ReactComponent as Person } from "../../../assets/images/behat.svg"
import { ReactComponent as FourArrow } from "../../../assets/images/FourArrow.svg"
import { ReactComponent as Icons } from "../../../assets/images/three.svg"
import { Link } from 'react-router-dom'


function HomeCards({image, picture}) {
  return (
    <Container>
<Wrapper>

<Link to='/details'>
<img src={picture} className="Card" alt="" />

</Link>


<Div>
<H1>
92 ALLIUM PLACE, ORLANDO FL 32827
</H1>
<Price>
$ 590,693
</Price>
<Main>
    <Car/>
    <Span>4</Span>
       <Person  className='person'/>
    <Span>4</Span>
    <FourArrow className='arrow'/>
    <Span>2,096.00 ft</Span>

</Main>
<Section>
<img src={image} alt='picture' className='picture' />
<Name className='name'>Jenny Wilson</Name>
<Icons className='icons'/>
</Section>
</Div>
</Wrapper>
    </Container>
  )
}

export default HomeCards