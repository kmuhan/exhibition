import { Link } from "react-router-dom"
import styled from "styled-components"

function Header() {

    const Wrapper = styled.div`
        padding-top: 25px;
        padding-bottom: 25px;
        display: flex;
        background-color: #F7EDDB;
    `
    const HeaderTitle = styled.div`
        color: black;
    `
    return (
        <Wrapper>
            <Link to={"/"}><HeaderTitle>HAN</HeaderTitle></Link>
        </Wrapper>
    )
}

export default Header