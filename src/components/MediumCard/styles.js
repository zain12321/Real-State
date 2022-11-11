import styled from "styled-components";
import home from "../../assets/images/MediumCard.png"
import { bodyLarge400, HeadingHeading1 } from "../../assets/typography";
import { grayWhite } from "../../common/styles";



export const Container = styled.div``
export const P = styled.p`
max-width: 696px;
${bodyLarge400};
color: ${grayWhite};
text-align: center;
margin-top: 20px;
`
export const H1 = styled.h1`
${HeadingHeading1};

color: ${grayWhite};
`
export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 20px;
margin-top: 70px;

`


export const Wrapper = styled.div`
	background: url(${home}) center/cover;
	background-repeat: no-repeat;
	object-fit: contain;
	background-size: cover;
    margin-top: 40px;
	height: 30vw;
	@media (max-width: 1248px) {
		height: 60vw;
	}
	@media (max-width: 550px) {
		height: 90vw;
	}
	
`
export const Section = styled.div`
	background-color: rgba(6, 48, 83, 0.6);
	height: 30vw;
	@media (max-width: 1248px) {
		height: 60vw;
	}
	@media (max-width: 550px) {
		height: 100vw;
	}
	
`
export const Button = styled.div`
padding: 10px 30px;
border: 1px solid ${grayWhite};
margin-top: 30px;
border-radius: 4px;
${bodyLarge400};
color: ${grayWhite};
`