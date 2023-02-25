import styled from "styled-components";
import ReppyLogo from "../assets/logo/ReppyFive.png";
import ReppyFiveMusicSearchModal from "../components/modal/ReppyFiveMusicSearchModal"
import { useState } from "react";
import { Button } from "../components/style";

const Wrapper = styled.div`
    height: fit-content;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #436B90;
`;

const Contents = styled.div`

`;

const ReppyLogoImg = styled.img`

`;

const SongInput = styled.input`

`
function Reppy() {
    const [songTitle, setSongTitle] = useState("");
    const changeSongTitle = e => {
        setSongTitle(e.target.value);
    };

    const [modalOpen, setModalOpen] = useState(false);
    const showModal = () => {
        setModalOpen(true);
    };

    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
          showModal(); // Enter 입력이 되면 클릭 이벤트 실행
        }
      };

    return (    
        <Wrapper>
            <ReppyLogoImg src={ReppyLogo} alt="ReppyFiveLogo"/>
            <Contents>
                <SongInput
                value={songTitle}
                onChange={changeSongTitle}
                placeholder="Enter the title:)"
                onKeyDown={handleOnKeyPress}
                />
                <Button width="10px" onClick={showModal} >Enter</Button>
            </Contents>
            {modalOpen && <ReppyFiveMusicSearchModal 
            setModalOpen={setModalOpen}
            songTitle = {songTitle}
            />}
        </Wrapper>
    )
}

export default Reppy