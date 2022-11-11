import React from 'react'
import { Call, Container, Email, H1, Icons, Item, Logo, P, Wrapper } from './styles'
import { ReactComponent as FooterLogo } from '../../assets/images/Footer_logo.svg'
import { ReactComponent as Footer1 } from '../../assets/images/footer/footer1.svg'
import { ReactComponent as Footer2 } from '../../assets/images/footer/footer2.svg'
import { ReactComponent as Footer3 } from '../../assets/images/footer/footer3.svg'
import { ReactComponent as Footer4 } from '../../assets/images/footer/footer4.svg'
import { ReactComponent as Footer5 } from '../../assets/images/footer/footer5.svg'
import FooterDetail from './FooterDetail'


function Footer() {
  return (
    <Container>
    <Wrapper>
    <Logo>
					<FooterLogo />
					<Item>
						<span className='reis'>REIS</span>
						<span className='real'>Real State</span>
					</Item>
				</Logo>
        <H1>
        Contact Us
        </H1>
        <Call>
        Call : +123 400 123
        </Call>
        <P>
        Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
        </P>
        <Email>
        Email: example@mail.com
        </Email>
        <Icons>
<Footer1/>
<Footer2 className='footer'/>
<Footer3 className='footer'/>
<Footer4 className='footer'/>
<Footer5 className='footer'/>

        </Icons>
    </Wrapper>
    <FooterDetail/>
    
    </Container>
  )
}

export default Footer