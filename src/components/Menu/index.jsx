import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../Home/styles'
import { LI } from './styles'

function Menu() {
  return (
    <Container>
    	<Link to='/'>
        <LI>
						HOME
					</LI>
                    </Link>
					<LI>
						ABOUT US
					</LI>
					<LI>
						OUR AGENT
					</LI>
					<Link to='section'>
					<LI>
					PROPERTIES
					</LI>
					</Link>
					
					<LI>
						GALLERY
					</LI>
					<LI>
						BLOG
					</LI>
					<LI>
						CONTACT US
					</LI>
					<LI>
						SEARCH
					</LI>
					<LI border>
						ADD LISTING
					</LI>
    </Container>
  )
}

export default Menu