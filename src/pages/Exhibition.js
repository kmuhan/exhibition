import styled from "styled-components";
import parasolImg from "../assets/img/sokcho_parasol.png"

const Wrapper = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ParasolImg = styled.img`
    width: 30%;
    box-shadow: 0px 17px 15px 1px #000000;
`
const ContentsParasol = styled.div`
    font-family: 'Gloock', serif;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #436B90;
    padding-top: 5vh;
`
const ContentsComment = styled.div`
    margin-top: 5vh;
    font-size: 20px;
`

function Exhibition() {
    return (    
        <Wrapper>
            <ContentsParasol>
                <ParasolImg src={parasolImg} alt="parasol image"/>
                <ContentsComment>Summer Man August, 2022</ContentsComment>
            </ContentsParasol>
        </Wrapper>
    )
}

export default Exhibition