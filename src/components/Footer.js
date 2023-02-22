import styled from "styled-components"

const Wrapper = styled.div`
    height: fit-content;
    min-height: 5vh;
    padding: 10px;
    background-color: #F7EDDB;
`
const Contents = styled.div`
    color: black;
    
`
const Copyright = styled.div`
    color: black;
`

function Footer() {
    return (
        <Wrapper>
            <Contents>            
                <Copyright>Copyright © 2023 Hangyul All rights reserved.</Copyright>
            </Contents>
        </Wrapper>
    )
}

export default Footer