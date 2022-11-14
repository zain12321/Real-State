import styled, { css } from "styled-components"
import home from "../../assets/images/Home.png"
import { bodyLarge400, bodyRegular400, bodyRegular500, bodySmall500, display, HeadingHeading5,
	 HeadingHeading4, HeadingHeading1 } from "../../assets/typography"
import { gray100, gray400, grayWhite, primary100, primary500, primary700, primary800 } from "../../common/styles"

export const Container = styled.div``
export const Wrapper = styled.div`
	background: url(${home}) center/cover;
	background-repeat: no-repeat;
	object-fit: contain;
	background-size: cover;
	height: 40vw;

	overflow: hidden;
	@media (max-width: 1248px) {
		height: 60vw;
	}
	@media (max-width: 550px) {
		height: 90vw;
	}
	
`
export const Section = styled.div`
	background-color: rgba(6, 48, 83, 0.6);
	height: 40vw;
	@media (max-width: 1248px) {
		height: 60vw;
	}
	@media (max-width: 550px) {
		height: 100vw;
	}
	
`

export const Content = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 60px auto;
	justify-content: center;
	text-align: center;
	@media (max-width: 1050px) {
		margin: 5px auto;
	}

`
export const P = styled.p`
	color: ${primary100};
	max-width: 700px;
	${bodyLarge400}
	margin-top: 20px;

	@media (max-width: 1050px) {
		font-size: 14px;
	margin-top: 5px;

	}
	@media (max-width: 400px) {
display: none;
	}
`
export const H1 = styled.h1`
	color: ${primary100};
	${display};
	@media (max-width: 1050px) {
		font-size: 34px;
	}
	@media (max-width: 550px) {
		font-size: 18px;
	}
`
export const Buttons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Button = styled.div`
	text-align: center;
	background-color: ${primary500};
	display: flex;
	flex-direction: column;
	color: ${grayWhite};
	padding: 20px;
	border-radius: 4px;

	${bodySmall500};
	${props =>
		props.scale &&
		css`
			background-color: ${grayWhite};
			color: ${primary500};
			margin-left: 5px;
		`}
	.poly {
		margin-top: 40px;
		margin-left: 3px;
		position: absolute;
		top: 10;
	}
`

export const Div = styled.div`
	background-color: ${grayWhite};
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	border-radius: 4px;
	max-width: 1556px;
	padding-bottom: 20px;
	margin: 13px 150px;
	position: absolute;
	display: grid;
	${'' /* vertical-align: middle; */}
	grid-template-columns: auto auto auto auto;
	@media (max-width: 700px) {
		margin: 13px 20px;
		margin-right: 20px;
	}

	@media (max-width: 600px) {
		margin: 10px 0px;
		display: flex;
		flex-direction: column;
		margin-top: 140px;
	}

	@media (max-width: 1000px) {
		margin: 10px 90px;
		grid-template-columns: auto auto auto;
	}
	@media (max-width: 770px) {
		margin: 10px 130px;
		grid-template-columns: auto  auto;
	}
`

export const H2 = styled.h2`
	${HeadingHeading5};
	color: ${primary700};
`
export const Span = styled.span`
	${bodyRegular400}
	color: ${gray400};
	.arrow {
		margin-left: 5px;
	}
`
export const Card = styled.div`
	margin-top: 30px;
	margin-left: 20px;
	border-right: 1px solid ${gray100};
	padding-left: 20px;
	padding-right: 20px;
	height: 60px;

	@media (max-width: 840px){
		padding:5px;
	margin-top: 10px;
		height: 80px;
	}
`

export const Search = styled.div`
	background-color: ${primary500};
	height: 30px;
	width: 102px;
	padding-top: 10px;
	margin: 20px 100px;
	border-radius: 4px;
	text-align: center;
	margin-top: 35px;
	${bodyRegular500};
	color: ${grayWhite};
	@media (max-width: 1248px) {
		margin: 20px 30px;
	}
`
export const Tag  = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  justify-content: center;
  align-items: center;
`
export const Box  = styled.div`
display: flex;
position: relative;
border-radius: 8px; 

.image{
width: 780px;
height: 241px;
border-radius: 8px;
object-fit: cover 


}
@media (max-width: 1200px){
	.image{
		width: 380px;
height: 241px;
	}
}

.images{
width: 380px ;
height: 241px;
border-radius: 8px; 
margin-left: 20px;
}
`
export const Title = styled.p`
position: absolute;
top: 20px;
left: 35px;
${HeadingHeading4};
color: ${grayWhite};
 ` 
 export const Box1 = styled.div`
position: relative;
border-radius: 8px;
 ` 

 export const Text  = styled.div`
 position: absolute;
top: 60px;
left: 35px;
color: ${grayWhite};
${bodyRegular400};


`
export const Icon  = styled.div`
position: absolute;
top: 160px;
left: 35px;
`

export const Set  = styled.div`
display: flex;
align-items: center;
margin: 0px 80px;
@media (max-width: 1200px){
	display: none;
}
`



export const Select = styled.div`
background-color: ${primary500};
margin: 30px auto;
display: flex;
align-items: center;
justify-content: center;
height: 40px;
width: 220px;
margin-top: 40px;
`
export const Btn = styled.div`
${bodyRegular500};
color: ${grayWhite};
`
export const Item = styled.h1`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 80px;
`
export const Desc = styled.h2`
${HeadingHeading1};
color: ${primary800};
${props => props.primary && css`
       color: ${gray400};
       ${bodyLarge400};
       margin-top: 10px;
       max-width: 696px;
       text-align: center;
`}
`
