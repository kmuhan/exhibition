import styled from "styled-components";

const Wrapper = styled.div`
    height: auto;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
`;
function Latest() {
    return (    
        <Wrapper>
            This page will be my Latest News
        </Wrapper>
    )
}

export default Latest