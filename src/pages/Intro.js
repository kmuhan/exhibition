import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Monet from "../assets/img/monet.png"
import Aboutme from "./Aboutme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;
const AboutmeImg = styled.img`
    width: 300px;
`
function Intro() {
    const navigate = useNavigate()
    const onClickAboutme = () => {
        navigate("/aboutme")
    }
    const onClickLatest = () => {
        navigate("/latest")
    }
    return (    
        <Wrapper>
            <div>han's views</div>
            <AboutmeImg src={Monet} alt="monet" onClick={onClickAboutme}/>
            <div onClick={onClickLatest}>Latest</div>
        </Wrapper>
    )
}

export default Intro