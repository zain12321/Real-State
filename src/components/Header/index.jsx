import React, {useState} from 'react'
import { Container, TopBar, Icon, H1, RightIcon, P, LeftIcon, Logo, Navbar, RightButton, 
	Item, Button, UL,  Hamburger } from './styles'
import { ReactComponent as FacebookSvg } from '../../assets/images/facebook.svg'
import { ReactComponent as HomeSvg } from '../../assets/images/home.svg'
import { ReactComponent as BallSvg } from '../../assets/images/ball.svg'
import { ReactComponent as LinkedInSvg } from '../../assets/images/linkedin.svg'
import { ReactComponent as InstagramSvg } from '../../assets/images/instagram.svg'
import { ReactComponent as BeSvg } from '../../assets/images/be.svg'
import { ReactComponent as LineSvg } from '../../assets/images/line.svg'
import { ReactComponent as PhoneSvg } from '../../assets/images/phone.svg'
import { ReactComponent as LogoSvg } from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { HiMenuAlt1 } from 'react-icons/hi';
import { SlClose } from 'react-icons/sl';
import Model from 'react-modal';
import Menu from "../Menu";
function Header() {
  
	const [modalIsOpen,setModalIsOpen] = useState(false);

	const setModalIsOpenToTrue =()=>{
		setModalIsOpen(true)
	}
  
	const setModalIsOpenToFalse =()=>{
		setModalIsOpen(false)
	}

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
				<Link to='/'><LogoSvg /></Link>
					
					<Item>
						<span className='reis'>REIS</span>
						<span className='real'>Real State</span>
					</Item>
				</Logo>
				<RightButton>
					<Button>
						HOME
					</Button>
					<Button>
						ABOUT US
					</Button>
					<Button>
						OUR AGENT
					</Button>
					<Link to='section'>
					<Button>
					PROPERTIES
					</Button>
					</Link>
					
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
				<Hamburger  onClick={setModalIsOpenToTrue}>
					<HiMenuAlt1 className='menu'/>
					</Hamburger>
					<Model className='model' isOpen={modalIsOpen}>
					<UL onClick={setModalIsOpenToFalse}>
					 <SlClose className='Close'/>
					</UL>
					   <Menu />
					</Model>
			</Navbar>
		</Container>
	)
}
export default Header
