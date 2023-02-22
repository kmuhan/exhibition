import styled from "styled-components";
import { Link } from "react-router-dom";
import Parasol from "../assets/img/parasol.jpg"

const Wrapper = styled.div`
    height: fit-content;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: #DAE2B6;
    font-family: Gloock;
`;
const BlogTitle = styled.div`
    color: black;
    font-size: 50px;
`
const IntroImg = styled.img`
    width: 50vh;
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