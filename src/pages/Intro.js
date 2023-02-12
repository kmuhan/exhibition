import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Monet from "../assets/img/monet.png"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;
function Intro() {
    const navigate = useNavigate()
    const onClickImg = () => {
        navigate("/aboutme")
    }
    return (    
        <Wrapper>
            <img src={Monet} alt="monet" onClick={onClickImg} />
        </Wrapper>
    )
}

export default Intro