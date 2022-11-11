import styled from "styled-components";
import { bodyLarge500, bodyRegular500 } from "../../../assets/typography";
import { grayWhite, primary500 } from "../../../common/styles";

export const Container = styled.div`
margin-top: 20px;
margin: 30px;
`
export const Wrapper = styled.div`
position: relative;

.Rent{
    height: 312px;
    width: 425px;
    border-radius: 6px;
    overflow: hidden;
    object-fit: cover;

}
`
export const Div = styled.div`
position: absolute;
top: 0px;
height: 312px;
background-color: rgba(59, 77, 129, 0.2);

`
export const Main = styled.div`
margin-left: 5px;
width: 345px;
margin-top: 110px;
display: flex;
align-items: center;
.location{
    margin-top: 90px;
    margin-left: 5px;
}

`

export const Button = styled.div`
text-align: center; 
height: 40px;
width: 80px;
margin: 10px;
`
export const P = styled.p`
background-color: ${primary500};
text-align: center; 
color: ${grayWhite};
height: 20px;
padding: 5px;
`

export const Section = styled.div`
margin-top: 20px;
margin-left:  50px;
`


export const Span = styled.div`
margin-top: 50px;
margin-left:  10px;
border: 1px solid ${grayWhite};
${bodyLarge500};
width: 120px;
padding: 5px;
color: ${grayWhite};

`

export const Text = styled.div`
margin-left: 2px;
${bodyRegular500};
color: ${grayWhite}
`