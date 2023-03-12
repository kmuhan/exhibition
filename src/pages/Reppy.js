import styled from "styled-components";
import ReppyLogo from "../assets/logo/ReppyFive.png";
import ReppyFiveMakePlaylistmodal from "../components/modal/ReppyFiveMakePlaylistModal";
import { useState, useRef } from "react";

const Wrapper = styled.div`
    height: fit-content;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #436B90;
`;

const AddButton = styled.div`
    width: 40vh;
    height: 40vh;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 17px 15px 1px #000000;
    border-radius: 10px;
    margin: 5%;
    cursor: pointer;
    &:hover{
        transition: 0.2s;
        opacity: 0.8;
      }
`

const AddTitle = styled.p`
    font-family: 'Shadows Into Light', cursive;
    font-size: 30px;
    font-weight: bold;
`

const ReppyLogoImg = styled.img`

`;


const ModalBackGround = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
backdrop-filter: blur(5px);
`
function Reppy() {
    const [makePlaylistModalOpen, setMakePlaylistModalOpen] = useState(false);
    const showMakePlaylistModal = () => {
        setMakePlaylistModalOpen(true);
    };

    const onMaskClick = (e) => {
        if (e.target === outside.current) {
            setMakePlaylistModalOpen(false)
        }
    };
    
    const outside = useRef();
    
    return (
        <Wrapper>
            <ReppyLogoImg src={ReppyLogo} alt="ReppyFiveLogo"/>
            <AddButton onClick={showMakePlaylistModal}>
                <svg fill="#ffffff" width="30%" height="30%" viewBox="-5.6 -5.6 67.20 67.20" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                    <g id="SVGRepo_iconCarrier">
                    <path d="M 10.7851 20.7227 C 10.7851 14.0664 14.3008 10.6211 20.9804 10.6211 L 42.0273 10.6211 L 42.0273 10.0351 C 42.0273 5.2070 39.5664 2.7695 34.6679 2.7695 L 9.6367 2.7695 C 4.7382 2.7695 2.2773 5.2070 2.2773 10.0351 L 2.2773 34.6914 C 2.2773 39.5429 4.7382 41.9570 9.6367 41.9570 L 10.7851 41.9570 Z M 21.3555 53.2305 L 46.3868 53.2305 C 51.2617 53.2305 53.7227 50.8164 53.7227 45.9883 L 53.7227 21.0742 C 53.7227 16.2461 51.2617 13.8086 46.3868 13.8086 L 21.3555 13.8086 C 16.4336 13.8086 13.9960 16.2461 13.9960 21.0742 L 13.9960 45.9883 C 13.9960 50.8164 16.4336 53.2305 21.3555 53.2305 Z M 33.9179 44.0664 C 32.8398 44.0664 31.9726 43.1992 31.9726 42.0273 L 31.9726 35.5117 L 25.3867 35.5117 C 24.3086 35.5117 23.3242 34.5742 23.3242 33.4961 C 23.3242 32.4648 24.3086 31.5039 25.3867 31.5039 L 31.9726 31.5039 L 31.9726 25.0117 C 31.9726 23.8633 32.8398 22.9961 33.9179 22.9961 C 34.9960 22.9961 35.8398 23.8633 35.8398 25.0117 L 35.8398 31.5039 L 42.2148 31.5039 C 43.4101 31.5039 44.3944 32.4180 44.3944 33.4961 C 44.3944 34.5976 43.4101 35.5117 42.2148 35.5117 L 35.8398 35.5117 L 35.8398 42.0273 C 35.8398 43.1992 34.9960 44.0664 33.9179 44.0664 Z"/>
                    </g>
                </svg>
                <AddTitle>Make Reppy Playlist</AddTitle>
            </AddButton>
            {makePlaylistModalOpen &&
                <ModalBackGround             
                ref={outside}
                onClick={onMaskClick}>
                    <ReppyFiveMakePlaylistmodal
                    setMakePlaylistModalOpen = {setMakePlaylistModalOpen}
                    />
                </ModalBackGround>
            }
        </Wrapper>
    )
}

export default Reppy