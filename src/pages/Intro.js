import styled from "styled-components";
import { Link } from "react-router-dom";
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
    return (    
        <Wrapper>
            <BlogTitle className="">EXHIBITION</BlogTitle>
            <Link to={"/aboutme"} preventScrollReset={true}><Img src={Parasol} alt="women with parasol"/></Link>
            <Link to={"/latest"} preventScrollReset={true}><BlogMenu>Latest</BlogMenu></Link>
        </Wrapper>
    )
}

export default Intro