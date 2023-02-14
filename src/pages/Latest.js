import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;
function Latest() {
    return (    
        <Wrapper>
            This page will be my Latest News
        </Wrapper>
    )
}

export default Latest