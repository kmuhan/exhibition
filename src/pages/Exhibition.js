import styled from "styled-components";
import parasolImg from "../assets/img/sokcho_parasol.png"

const Wrapper = styled.div`
    height: auto;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5vh;
    background-color: #274962;
`;
const Img = styled.img`
    width: 50%;
`
const Contents = styled.div`
    font-size = 20px
`
function Exhibition() {
    return (    
        <Wrapper>
            <Contents>This Page will be my exhibition</Contents>
            <Img src={parasolImg} alt="parasol image"/>
        </Wrapper>
    )
}

export default Exhibition