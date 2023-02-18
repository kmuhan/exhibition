import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Parasol from "../assets/img/parasol.jpg"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  color: black;
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
            <Img src={Parasol} alt="women with parasol" onClick={onClickAboutme}/>
            <BlogMenu onClick={onClickLatest}>Latest</BlogMenu>
        </Wrapper>
    )
}

export default Intro