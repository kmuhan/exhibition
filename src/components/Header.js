import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
height: fit-content;
min-height: 8vh;
display: flex;
padding-top: 25px;
padding-bottom: 25px;
background-color: #F7EDDB;
justify-content: space-evenly;
`
const HeaderTitle = styled.div`
    font-family: 'Gloock', serif;
    font-size: 35px;
    color: black;
`
const HeaderNav = styled.div`
    font-family: 'Gloock', serif;
    font-size: 30px;
    color: black;
`

function Header() {
    return (
        <Wrapper>
            <NavLink to={"/"}><HeaderTitle>HAN</HeaderTitle></NavLink>
            <NavLink 
                to={"/exhibition"}
                activestyle={{
                    fontWeight: "bold",
                    color: "red",
                    backgroundColor: "#F7EDDB"
                  }}
            ><HeaderNav>EXHIBITION</HeaderNav></NavLink>
            <NavLink to={"/latest"}><HeaderNav>Latest</HeaderNav></NavLink>
            <NavLink to={"/aboutme"}><HeaderNav>Portfolio</HeaderNav></NavLink>
            <NavLink to={"/reppy"}><HeaderNav>REPPY</HeaderNav></NavLink>
        </Wrapper>
    )
}

export default Header