import styled from "styled-components"

const Wrapper = styled.div`
    height: 5vh
    padding: 10px;
    background-color: #F7EDDB;
`
const Contents = styled.div`
    color: black;
    
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