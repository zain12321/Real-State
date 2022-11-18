import styled, { css } from "styled-components";
import { Button } from "../../assets/typography";
import { grayWhite, primary200, primary500 } from "../../common/styles";

export const Container = styled.div`
margin-top: 60px;
`
export const Main = styled.div`
margin-left: 40px;
display: grid;
grid-gap: 10px;
grid-template-columns: repeat(5, 1fr);
@media(max-width: 1100px){
    grid-template-columns: repeat(4, 1fr);

}
@media(max-width: 800px){
    display: flex;
    flex-direction: column;
    padding: 10px;
margin-left: 0px;

}
`

export const Buttons = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
`
export const Btn = styled.div`
background-color: ${primary200};
padding: 10px;
border-radius: 4px;

${props => props.primary && css`
background-color: ${primary500};
margin-left: 30px;
`}
`

export const P = styled.p`
background-color: ${primary500};
text-align: center; 
color: ${grayWhite};
height: 20px;
padding: 5px;
${Button};
overflow: hidden;

`
