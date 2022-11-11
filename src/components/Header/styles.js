import styled, { css } from 'styled-components';
import {grayWhite, primary100,primary50} from '../../common/styles'
import {bodySmall400, Heading6, Heading7} from '../../assets/typography'

export const Container = styled.div `
  display: flex;
  flex-direction: column;
`
export const TopBar = styled.div`
    border-bottom: 1px solid ${primary100};
    color:  ${primary100};
    width: screen;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 80px 20px 80px;

   @media (max-width: 1000px){
   padding: 5px;
   }
`

export const Icon = styled.div`
display: flex;


`
export const LeftIcon = styled.div`
display: flex;

`
export const H1 = styled.h1`
display: flex;
padding-left: 10px;
${bodySmall400}
.Email{
   font-weight: 700;
   font-family: 'Inter';
}
.com{
  padding-left: 5px;
}

`
export const RightIcon = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
width: 300px;

@media (max-width: 550px ){
  display: none;   
}
@media (max-width: 540px ){
width: 250px;}
`

export const P = styled.p`
padding-left: 10px;
${bodySmall400};

`

export const Navbar = styled.div`
padding: 20px 80px 20px 80px;
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width: 1000px){
   padding: 5px ;
   }
` 
export const Logo = styled.div`
display: flex;
align-items: center;
` 
export const RightButton = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 70%;
@media (max-width: 1088px ){
width: 70%;}
@media (max-width: 840px ){
width: 85%;
}
@media (max-width: 720px ){
display: none;
}
`
export const Item = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 2px;
padding-left: 5px;
color: ${primary50};

.reis{
  ${Heading6};
 
}
.real{
 ${Heading7};
}
` 
export const Button = styled.div`
${bodySmall400};
cursor: pointer;
color: ${grayWhite};
${props => props.border && css`
border: 1px solid ${grayWhite};
padding: 12px 24px;
border-radius: 4px;
  color: white;
  @media (max-width: 1248px){
    display: none;
  }
  `}
`