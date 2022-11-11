import styled, { css } from "styled-components";
import { bodyRegular600 } from "../../assets/typography";
import { grayBlack, grayWhite, primary50, primary500 } from "../../common/styles";



export const Container = styled.div``

export const Buttons = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
`
export const Btn = styled.div`
background-color: ${primary50};
padding: 10px;
color: ${grayBlack};
border-radius: 4px;
${bodyRegular600};
cursor: pointer;
${props => props.primary && css`
background-color: ${primary500};
margin-left: 5px;
color: ${grayWhite};

`}
${props => props.primary2 && css`
padding: 15px 19px;
margin-right: 7px;
margin-left: 7px;
color: ${grayWhite};

`}

${props => props.primary1 && css`
margin-right: 7px;
margin-left: 7px;
padding: 15px 19px;
color: ${primary500};

`}
`
