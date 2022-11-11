import styled from "styled-components";

export const Container = styled.div`
`
export const Main = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
margin: 10px 80px;
@media (max-width: 1200px){
grid-template-columns: repeat(1, 1fr);
    
}
@media (max-width: 500px){
    margin: 10px 10px;
}
`

