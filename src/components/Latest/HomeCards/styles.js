import styled from "styled-components";
import { bodyLarge500, bodyLarge600, bodyRegular400, HeadingHeading10 } from "../../../assets/typography";
import { gray50, gray500, gray700, grayWhite, primary500 } from "../../../common/styles";


export const Container = styled.div`

`
export const Div = styled.div`
padding: 10px;
background-color: ${grayWhite};
`
export const Price = styled.div`
padding-top: 10px;
${bodyLarge600};
color: ${primary500};
`
export const H1 = styled.h1`
${HeadingHeading10};
color: ${gray700};
`
export const Wrapper = styled.div`
background-color: ${grayWhite};
overflow: hidden;
perspective: 1px;
width: 374px;
border-radius: 7px;
-webkit-border-radius: 7px;
-moz-border-radius: 7px;
margin-top: 10px;



.Card{
    width: 100%;
    overflow: hidden;

   height: 190px;
border-radius: 10px 10px 0px 0px;
   
}  
`

export const Main = styled.div`
display: flex;
align-items: center; 
margin-top: 20px;
.person{
    margin-left: 20px;
}
.arrow{
    margin-left: 30px;
}
`
export const Span = styled.span`
margin-left: 5px;
${bodyRegular400};
color: ${gray500};

`
export const Section = styled.div`
margin-top: 20px;
display: flex;
align-items: center;
padding-top: 8px;
border-top: 1px solid ${gray50};
.picture{
    height: 42px;
    width: 42px;
    border-radius: 50%;
}
.icons{
    padding-left: 30px;
}


`
export const Name= styled.div`
    ${bodyLarge500};
    color: ${gray700};
   padding-left: 10px;
`

