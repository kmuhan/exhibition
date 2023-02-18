import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Monet from "../assets/img/monet.png"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;
const BlogTitle = styled.div`
    font-size: 50px;
`
const BlogMenu = styled.div`
    font-size: 30px;
`
const Img = styled.img`
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
            <BlogTitle className="">EXHIBITION</BlogTitle>
            <Img src={Monet} alt="monet" onClick={onClickAboutme}/>
            <BlogMenu onClick={onClickLatest}>Latest</BlogMenu>
        </Wrapper>
    )
}

export default Intro