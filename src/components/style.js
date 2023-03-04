import styled from "styled-components";

const Button = styled.button`
    width = ${props => props.width || '5px'}
    border-radius: 2em;
`
export {Button}

const Li = styled.li`
display: flex;
flex-direction: column;
cursor: pointer;
&:hover{  
    background-color : rgba(0, 0, 0, 0.3);
  }
img {
    width: 40%;
}
.trackName{
    background-color: #393939;
    border-radius: 3em;
}
`
export {Li}
