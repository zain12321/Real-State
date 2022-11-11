import React from 'react'
import HomeCards from './HomeCards'
import { Container, Main } from './styles'
import Person1 from '../../assets/images/person1.png'
import Person2 from '../../assets/images/person2.png'
import Person3 from '../../assets/images/person3.png'
import Card1 from '../../assets/images/card1.png'
import Card2 from '../../assets/images/picture2.png'
import Card3 from '../../assets/images/picture3.png'
import Card4 from '../../assets/images/picture4.png'
import Card5 from '../../assets/images/picture5.png'
import Card6 from '../../assets/images/picture6.png'


function Latest() {
  return (
    <Container>
        <Main>
        
        <HomeCards image={Person1} picture={Card1} />
        <HomeCards image={Person2} picture={Card2} />
        <HomeCards image={Person3} picture={Card3} />
        <HomeCards image={Person1} picture={Card4} />
        <HomeCards image={Person2} picture={Card5} />
        <HomeCards image={Person3} picture={Card6} />
        </Main>

       
    </Container>
  )
}

export default Latest