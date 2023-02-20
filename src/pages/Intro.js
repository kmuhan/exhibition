import styled from "styled-components";
import { Link } from "react-router-dom";
import Parasol from "../assets/img/parasol.jpg"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: black;
`;
const BlogTitle = styled.div`
    font-size: 50px;
`
const IntroImg = styled.img`
    width: 300px;
`
function Intro() {
    return (    
        <Wrapper>
            <BlogTitle className="">EXHIBITION</BlogTitle>
            <Link to={"/exhibition"} preventScrollReset={true}><IntroImg src={Parasol} alt="women with parasol"/></Link>
        </Wrapper>
    )
}

export default Intro