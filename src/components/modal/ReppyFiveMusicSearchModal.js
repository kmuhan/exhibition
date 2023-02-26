import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import axios from "axios";

function ReppyFiveMusicSearchModal({ setSearchModalOpen, songTitle }) {
    const [songList, setSongList] = useState()
    const getSong = useCallback(async () => {
        try {
            const songData = await axios.get(`https://itunes.apple.com/search?media=music&term=${songTitle}&entity=song`);
            setSongList(songData.data)
        } catch (error) {
            console.log(error);
        }
    }, [songTitle])

    useEffect(()=> {
        getSong();
    }, [songTitle])

    const Modal = styled.div`
        width: fit-contents;
        height: fit-contents;
        background-color: #ffffff;
    `
    const List = styled.ul`

    `
    const Li = styled.li`
    
    `
    const closeModal = () => {
        setSearchModalOpen(false);
    };
    console.log(songList)
    return (
        <Modal>
            <button onClick={closeModal}>X</button>  
            {songList !== undefined &&
            <List>
                {songList.results.map((item) => (
                    <Li key={item.trackId}>{item.trackName}, {item.artistName}</Li>
                ))}
            </List>}
        </Modal>
    );
}
export default ReppyFiveMusicSearchModal;