import React from 'react'
import HomeCards from '../../components/Latest/HomeCards'
import Orders from '../../components/Orders'
import Latest from '../../components/Latest'
import { Container,  Main } from './styles'
import Person1 from '../../assets/images/picture4.png'
import Person2 from '../../assets/images/picture5.png'
import Person3 from '../../assets/images/picture6.png'
import Card4 from '../../assets/images/picture4.png'
import Card5 from '../../assets/images/picture5.png'
import Card6 from '../../assets/images/picture6.png'
function Category() {
  return (
    <Container>
       <Orders/>
        <Latest className="latest"
        /> 
         <Main>
        <HomeCards image={Person1} picture={Card4} />
        <HomeCards image={Person2} picture={Card5} />
        <HomeCards image={Person3} picture={Card6} />
        </Main>
    </Container>
  )
}

export default Category