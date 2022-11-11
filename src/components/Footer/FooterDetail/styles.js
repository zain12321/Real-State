import styled from "styled-components";
import { bodyRegular400, HeadingHeading4 } from "../../../assets/typography";
import { gray500, grayBlack } from "../../../common/styles";

export const Container = styled.div`
margin-left: 40px;
@media (max-width: 1248px){
    margin-left: 0px;
}
`
export const Div = styled.div`
margin-left: 120px;
@media (max-width: 1248px){
    margin-left: 20px;
    margin-top: 30px;
}
`
export const H1 = styled.h1`
${HeadingHeading4};
color: ${grayBlack};
`
export const P = styled.p`
padding-top: 20px;
${bodyRegular400};
color: ${gray500};
`

export const Wrapper = styled.div`
display: flex;
@media (max-width: 600px){
    display: flex;
    flex-direction: column;

}
`