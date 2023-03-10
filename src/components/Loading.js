import styled from "styled-components";
import Browser from "../assets/img/Group 1.png"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

function Loading() {
    return (
        <Wrapper>
            <img src={Browser} alt="monet" />
        </Wrapper>
    )
}

export default Loading