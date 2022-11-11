import styled, { css } from "styled-components";
import { bodyLarge500, bodyRegular400, bodyRegular600, HeadingHeading2, HeadingHeading4 }
 from "../../../assets/typography";
import { gray400, gray700, primary500 } from "../../../common/styles";


export const Select = styled.div`
margin: 60px 100px;
@media (max-width: 900px){
    margin: 30px 20px;

}
`
export const Main = styled.div`
padding-left: 20px;
`
export const H1 = styled.h1`
color: ${primary500};
${HeadingHeading4};
padding-top: 20px;
`
export const Div = styled.h2`
position: absolute;
right: 154px;
top: 200px;

@media (max-width: 1200px){
left: 5px;
top: 200px;
    
}
`
export const H2 = styled.h2`

`

export const Wrapper = styled.div`
display: flex;
@media (max-width: 1200px){
display: flex;;
flex-direction: column;
}
`
export const Section = styled.div`
display: flex;
.picture{
    height: 42px;
    width: 42px;
    border-radius: 50%;
}
.icons{
    padding-left: 90px;

}


`
export const Name= styled.div`
    ${bodyLarge500};
    color: ${gray700};
   padding-left: 10px;
`

export const Image = styled.div`
overflow: hidden;
position: relative;
.Home{
   height: 350px;
   width: 600px;

   border-radius: 12px;
}
`

export const P = styled.p`
width: 506px;
color: ${gray400};
${bodyRegular400};
padding-top: 20px;
${props => props.primary && css`
${bodyRegular600};
padding-top: 10px;
`}
;`
export const Price = styled.div`
${HeadingHeading2};
color: ${primary500};

padding-top: 10px;
`

