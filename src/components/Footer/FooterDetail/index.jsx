import React from 'react'
import { Container , Wrapper, Div, H1, P} from './styles'

function FooterDetail() {
  return (
    <Container>
        <Wrapper>
            <Div>
             <H1>
                Features
             </H1>
             <P>
                Home
             </P>
             <P>
             Become a Host
             </P> <P>
             Pricing
             </P> <P>
                Blog
             </P> <P>
                Contact
             </P>
            </Div>
            <Div>
             <H1>
                Company
             </H1>
             <P>
                About Us
             </P>
             <P>
           Press
             </P> <P>
             contact
             </P> <P>
             Careers
             </P> <P>
                Blog
             </P>
            </Div>
            <Div>
             <H1>
             Team and policies
             </H1>
             <P>
             Terms of servies    
                      </P>
             <P>
             Privacy Policy
             </P> <P>
             Security
             </P>
            </Div>
        </Wrapper>
    </Container>
  )
}

export default FooterDetail