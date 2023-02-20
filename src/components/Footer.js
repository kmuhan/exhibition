import styled from "styled-components"

const Wrapper = styled.div`
    position: relative;
    transform: translatY(-100%);
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