import styled, { css } from "styled-components";
import { bodyLarge400, bodyRegular400, HeadingHeading4 } from "../../../assets/typography";
import { gray400, gray700, grayWhite, primary500 } from "../../../common/styles";



export const Container = styled.div`

.gray{
    ${props => props.primary && css`
    background-color: ${grayWhite};
    
  `}
}
  
  `
  
  export const Wrapper = styled.div`
padding: 30px;
display: flex;
flex-direction: column;

  `

export const H1 = styled.h1`
${HeadingHeading4};
color: ${gray700};
margin-top: 10px;
`



export const Icon = styled.div`

`
export const P = styled.p`
${bodyRegular400};
color: ${gray400};
margin-top: 10px;
`
export const Span = styled.span`
${bodyLarge400}
color: ${primary500};
margin-top: 30px;
`

