import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;
function Aboutme() {
    return (    
        <Wrapper>
            This page will be about Me Myself and I
            I want to be programmer
        </Wrapper>
    )
}

export default Aboutme