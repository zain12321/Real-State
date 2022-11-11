import styled from "styled-components";
import { bodyLarge400, bodyRegular400, HeadingHeading1, HeadingHeading4 } from "../../assets/typography";
import { gray400, grayWhite, primary800 } from "../../common/styles";


export const H3 = styled.h3`
${HeadingHeading1};
color: ${primary800};
@media (max-width: 770px){
  margin-top: 140px;
}
@media (max-width: 600px){
  margin-top: 340px;
}
`
export const H6 = styled.h6`
${bodyLarge400};
color: ${gray400};
max-width: 696px;
text-align: center;
margin-top: 20px;
`
export const Tag  = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  justify-content: center;
  align-items: center;
`
export const Wrapper  = styled.div`
display: flex;
position: relative;
border-radius: 8px; 
.images{
width: 381px ;
height: 241px;
border-radius: 8px; 
margin-left: 20px;
margin-bottom: 20px;
}

`
export const P = styled.p`
position: absolute;
top: 20px;
left: 35px;
${HeadingHeading4};
color: ${grayWhite};
 ` 
 export const Div = styled.div`
position: relative;
border-radius: 8px;
 ` 

 export const Span  = styled.div`
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
export const Main  = styled.div`
  display: flex;
margin: 0px 60px;
margin-top: 20px;

@media (max-width: 1200px){
display: flex;
flex-direction: column;
}
` 