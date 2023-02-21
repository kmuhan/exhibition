import { Link } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
height: 8vh;
display: flex;
padding-top: 25px;
padding-bottom: 25px;
background-color: #F7EDDB;
justify-content: space-evenly;
`
const HeaderTitle = styled.div`
color: black;
`
const HeaderNav = styled.div`
color: black;
`

function Header() {
    return (
        <Wrapper>
            <Link to={"/"}><HeaderTitle>HAN</HeaderTitle></Link>
            <Link to={"/aboutme"}><HeaderNav>Portfolio</HeaderNav></Link>
            <Link to={"/exhibition"}><HeaderNav>EXHIBITION</HeaderNav></Link>
            <Link to={"/latest"}><HeaderNav>Latest</HeaderNav></Link>
        </Wrapper>
    )
}

export default Header