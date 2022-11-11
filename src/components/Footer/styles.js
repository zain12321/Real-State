import styled from "styled-components";
import { bodyRegular400, Heading6, Heading7, HeadingHeading4 } from "../../assets/typography";
import { gray500, gray700, grayBlack, primary500 } from "../../common/styles";


export const Container = styled.div `
padding: 50px 100px;
display: flex;
@media (max-width: 1000px){
    display: flex;
    flex-direction: column;
padding: 50px 40px;

}
`
export const Logo = styled.div`
display: flex;
align-items: center;

`
export const Item = styled.div `
display: flex;
flex-direction: column;
color: ${primary500};
padding-bottom: 5px;
padding-left: 5px;
.reis{
    ${Heading6};
}
.real{
${Heading7};
}
`

export const Wrapper = styled.div `
`
export const H1 = styled.h1 `
color: ${grayBlack};
margin-top: 20px;
${HeadingHeading4};
`
export const P = styled.div`
width: 312px;
${bodyRegular400};
color: ${gray500};
margin-top:10px;
`
export const Call = styled.div`
${bodyRegular400};
color: ${grayBlack};
margin-top: 10px;
`
export const Email = styled.div `
${bodyRegular400};
color: ${gray700};
margin-top: 10px;
margin-bottom: 10px;
`

export const Icons = styled.div `
margin-top: 15px;
.footer{
    margin-left: 8px;

}
`