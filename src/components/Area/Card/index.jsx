import React from 'react'
import { Container, Icon, P , H1, Span, Wrapper} from './styles'

function Card({top, home}) {
  return (
    <Container>
      <Wrapper>
      <Icon>
        {home}
       </Icon>
       <H1>
       {top}
       </H1>
       <P>
       We do a free evaluation to be sure you want to start selling.
       </P>
       <Span>
       Read more
       </Span>
      </Wrapper>
    </Container>
  )
}

export default Card