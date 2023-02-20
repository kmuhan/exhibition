import styled from "styled-components"

const Wrapper = styled.div`
    height: 5vh;
    position : relative;
    transform : translateY(-100%);
`
const Contents = styled.div`
    color: black;
    background-color: #F7EDDB;
    
`

function Footer() {
    return (
        <Wrapper>
            <Contents>            
                Footer
            </Contents>
        </Wrapper>
    )
}

export default Footer