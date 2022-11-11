import React from 'react'
import { Container, P, H2, Span, Main, Detail, Desc, Icon, Wrapper, H1 } from  "../Area/styles"
import Card from './Card'
import { ReactComponent as Groups } from '../../assets/images/group.svg'


function Area() {
  return (
    <Container>
    
        <P>
       <H2>Propertice by Area</H2> 
        <Span>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </Span>
        </P>
       <Main>
       <Wrapper>
      <Icon>
       <Groups/>
       </Icon>
       <H1>
     Sell You Home
       </H1>
       <Detail>
       We do a free evaluation to be sure you want to start selling.
       </Detail>
       <Desc>
       Read more
       </Desc>
      </Wrapper>
          <Card home={<Groups/>} top={'Rent your home'}/>
          <Card home={<Groups/>} top={'Buy a home'}/>
          <Card home={<Groups/>} top={'Free marketing'}/>
       </Main>
     
    </Container>
  )
}

export default Area