import styled, { css } from "styled-components";
import { bodyRegular500, bodyRegular600 } from "../../assets/typography";
import {  gray500, grayBlack } from "../../common/styles";


export const Container =  styled.div`
margin: 40px 100px;
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width: 1000px){
margin: 40px 30px;
display: flex;
flex-direction: column;
}
`
export const Div =  styled.div`
display: flex;
align-items: center;

`

export const H1 =  styled.h1`
${bodyRegular500};
color: ${grayBlack};
margin-left: 20px;
`
export const Span =  styled.span`
color: ${gray500};
margin-left: 4px; 
`
export const Icon =  styled.div`
margin-left: 10px;
`
export const Main = styled.div`
   display: flex;
   align-items: center;
   width: 350px;
   justify-content: space-between;
`
export const P = styled.p`
  color: ${gray500};
  ${bodyRegular600};
  ${props => props.primary && css`
  color: ${grayBlack};
  ` }
`

