import styled from "styled-components";
import monetBrowser from "../assets/img/Group 1.png"

const Wrapper = styled.div`
    height: auto;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
`;
const Img = styled.img`
    width: 300px;
`
const Contents = styled.div`
    font-size = 20px
`
function Aboutme() {
    return (    
        <Wrapper>
            <Contents>This page will be about Me Myself and I I want to be programmer</Contents>
            <Img src={monetBrowser} alt="monetBrowser"/>
        </Wrapper>
    )
}

export default Aboutme