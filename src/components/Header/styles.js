import styled, { css } from 'styled-components';

export const Container = styled.div `
 color: blue;
 font-size: 30px;
 font-weight: bold;
 margin-top: 30px;   
 display: flex;
 align-items: center;
`
export const P = styled.p `
color: green;
 ${props => props.red && css`color:red`}

`