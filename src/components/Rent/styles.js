import styled, { css } from "styled-components";
import { primary200, primary500 } from "../../common/styles";

export const Container = styled.div`
margin-top: 60px;
`
export const Main = styled.div`
margin-left: 40px;
display: grid;
grid-gap: 10px;
grid-template-columns: repeat(5, 1fr);
@media(max-width: 1000px){
    display: flex;
    flex-direction: column;
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