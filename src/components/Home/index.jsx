import React from "react"
import {
	Container,
	Content,
	Section,
	Wrapper,
	H1,
	P,
	Buttons,
	Button,
	Div,
	Card,
	H2,
	Span,
	Search,
	Box,
	Box1,
	Title,
	Text,
	Icon,
	Set,
	Btn,
	Select,
	Item,
	Desc
} from "../Home/styles"
import Header from "../Header"
import { ReactComponent as PolyGon } from "../../assets/images/polygon.svg"
import { ReactComponent as ArrowSvg } from "../../assets/images/arrow.svg"
import Properties from "../Properties"
import { ReactComponent as LocationSvg } from '../../assets/images/pin.svg'

import { H3, Tag, H6, Main } from "../Properties/styles"
import whiteHouse from '../../assets/images/whiteHouse.png'
import House1 from '../../assets/images/house1.png'
import House2 from '../../assets/images/house2.png'
import House3 from '../../assets/images/house3.png'
import home from '../../assets/images/Home.png'
import Area from "../Area"
import Latest from "../Latest"
import Rent from "../Rent"
import MediumCard from "../MediumCard"
import Footer from "../Footer"




function Home() {
	return (
		<Container>
			<Wrapper>
				<Section>
					<Header />
					<Content>
						<H1>Find Your Dream Home</H1>
						<P>
							Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales
							ultrices nulla blandit volutpat.
						</P>
					</Content>
					<Buttons>
						<Button>
							Rent
							<PolyGon className="poly" />
						</Button>
						<Button scale>Scale</Button>
					</Buttons>
					<Div>
						<Card>
							<H2>Locations</H2>
							<Span>
								Select your city
								<ArrowSvg className="arrow" />
							</Span>
						</Card>
						<Card>
							<H2>Property Type</H2>
							<Span>
								Select property type
								<ArrowSvg className="arrow" />
							</Span>
						</Card>
						<Card>
							<H2>Rent Range</H2>
							<Span>
								Select rent range
								<ArrowSvg className="arrow" />
							</Span>
						</Card>
						<Search>Search</Search>
					</Div>
					
				</Section>
			</Wrapper>
			<Tag>
			<H3>
                 Propertice by Area
                 </H3>
				 <H6>
				 Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
				 </H6>
			</Tag>
			<Main>
			<Properties image={whiteHouse} title={"Washington"} desc={"25 listings"} />
			<Properties image={House1} title={"Franklin"} desc={"25 listings"} />
			<Properties image={House2} title={"Clinton"} desc={"25 listings"} />
		
			{/* <Properties image={home} title={"House 2"} desc={"sookpokdfefoefo"} /> */}

			</Main>
			<Set>
			<Box>
         <Box1>
         <img  src={home} className='image' alt="" />
          <Title>Franklin</Title>
           <Text>25 listings</Text>
           <Icon>
            <LocationSvg/>
           </Icon>
         </Box1>
      </Box>
	  <Box>
         <Box1>
         <img  src={House3} className='images' alt="" />
          <Title>Centerville</Title>
           <Text>25 listings</Text>
           <Icon>
            <LocationSvg/>
			
           </Icon>
         </Box1>
      </Box>
			</Set>
			  <Area/>
			  <Item>
            <Desc>Letest Properties of Rent</Desc>
            <Desc primary>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.</Desc>
        </Item>
			  <Latest/>
			  
			  <Select>
        <Btn>
        Load more listing
        </Btn>
        </Select>
			  <Rent/>
			  <MediumCard/>
			  <Footer/>
		</Container>
	)
}

export default Home
