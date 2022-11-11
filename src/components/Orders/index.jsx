import React from 'react'
import { Container, Div, H1, Icon, Main, P, Span } from './styles'
import { ReactComponent as Menu } from '../../assets/images/propertice/menu.svg'
import { ReactComponent as Open } from '../../assets/images/propertice/open.svg'
import { Link } from 'react-router-dom'


function Orders() {
  return (
    <Container>
        <Div>
          <Menu/>
          <Icon>
          <Open />
          </Icon>         
          <H1>
          Sort by:<Span>Default Order</Span> 
          </H1>
        </Div>
        <Main>
        
        <Link to='/details'>
         <P primary>

         All Properties
         </P>
         </Link>
         <P>
          For You
         </P>
         <P>
         For Sale
         </P>
         <P>
         For Sale
         </P>
        </Main>
    </Container>
  )
}

export default Orders