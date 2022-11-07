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
} from "../Home/styles"
import Header from "../Header"
import { ReactComponent as PolyGon } from "../../assets/images/polygon.svg"
import { ReactComponent as ArrowSvg } from "../../assets/images/arrow.svg"

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
		</Container>
	)
}

export default Home
