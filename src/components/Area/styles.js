import styled from "styled-components";
import { bodyLarge400, HeadingHeading1, HeadingHeading4, bodyRegular400 } from "../../assets/typography";
import { gray400, primary800, primary50, primary500, grayWhite, gray700 } from "../../common/styles";

export const Container = styled.div`
background-color: ${primary50};
padding: 20px;
margin-top: 40px;
width: screen;
`

export const P = styled.p`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 10px;
`
export const H2 = styled.h2`
${HeadingHeading1};
color: ${primary800};

`
export const Span = styled.p`
${bodyLarge400};
text-align: center;
max-width: 696px;
color: ${gray400};
margin-top: 10px;
`

export const Main = styled.div`
display: grid;
algn-items: center;
margin:  70px 40px;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;
@media (max-width: 1100px){
  grid-template-columns: repeat(3, 1fr);

}
@media (max-width: 900px){
  grid-template-columns: repeat(2, 1fr);

}

@media (max-width: 900px){
display: flex;
flex-direction: column;
}

`


 
export const Wrapper = styled.div`
padding: 30px;
display: flex;
flex-direction: column;
background-color: ${grayWhite};

  `

export const H1 = styled.h1`
${HeadingHeading4};
color: ${gray700};
margin-top: 10px;
`



export const Icon = styled.div`

`
export const Detail = styled.div`
${bodyRegular400};
color: ${gray400};
margin-top: 10px;
`
export const Desc = styled.div`
${bodyLarge400}
color: ${primary500};
margin-top: 30px;
`

