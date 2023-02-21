import styled from "styled-components";
import { Link } from "react-router-dom";
import Parasol from "../assets/img/parasol.jpg"

const Wrapper = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: #DAE2B6;
`;
const BlogTitle = styled.div`
    color: black;
    font-size: 50px;
`
const IntroImg = styled.img`
    color: black;
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