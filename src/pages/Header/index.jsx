import React from 'react'
import { Container, TopBar, Icon, H1, RightIcon, P, LeftIcon, Logo, Navbar, RightButton, Item, Button } from './styles'
import { ReactComponent as FacebookSvg } from '../../assets/images/facebook.svg'
import { ReactComponent as HomeSvg } from '../../assets/images/home.svg'
import { ReactComponent as BallSvg } from '../../assets/images/ball.svg'
import { ReactComponent as LinkedInSvg } from '../../assets/images/linkedin.svg'
import { ReactComponent as InstagramSvg } from '../../assets/images/instagram.svg'
import { ReactComponent as BeSvg } from '../../assets/images/be.svg'
import { ReactComponent as LineSvg } from '../../assets/images/line.svg'
import { ReactComponent as PhoneSvg } from '../../assets/images/phone.svg'
import { ReactComponent as FooterLogo } from '../../assets/images/Footer_logo.svg'
import { Link } from 'react-router-dom'


function Header() {
	return (
		<Container>
			<TopBar>
				<LeftIcon>
				<HomeSvg />
					
					<H1>
						<span className="Email">Email us at : </span>
						<span className="com">example@mail.com</span>
					</H1>
				</LeftIcon>
				<RightIcon>
					<Icon>
						<FacebookSvg />
					</Icon>
					<Icon>
						<BallSvg />
					</Icon>
					<Icon>
						<LinkedInSvg />
					</Icon>
					<Icon>
						<InstagramSvg />
					</Icon>
					<Icon>
						<BeSvg />
					</Icon>
					<Icon>
						<LineSvg />
					</Icon>
					<Icon>
						<PhoneSvg />
						<P>123-4567 890</P>
					</Icon>
				</RightIcon>
			</TopBar>
			<Navbar>
            <Logo>
			<Link to='/'><FooterLogo /></Link>
					
					<Item>
						<span className='reis'>REIS</span>
						<span className='real'>Real State</span>
					</Item>
				</Logo>
				<RightButton>
                <Link to='/'>
					<Button className='home'>
						HOME
					</Button>
                    </Link>
					<Button>
						ABOUT US
					</Button>
					<Button>
						OUR AGENT
					</Button>
					<Button primary2>
					PROPERTIES
					</Button>
					
					<Button>
						GALLERY
					</Button>
					<Button>
						BLOG
					</Button>
					<Button>
						CONTACT US
					</Button>
					<Button>
						SEARCH
					</Button>
					<Button border>
						ADD LISTING
					</Button>
				</RightButton>
			</Navbar>
		</Container>
	)
}
export default Header
