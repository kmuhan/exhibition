import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { Li } from "../style";
import axios from "axios";

const Modal = styled.div`
width: 100%;
height: 100%;
background-color: #ffffff;
overflow: auto;
`
const List = styled.ul`

`

function ReppyFiveMusicSearchModal({ setSearchModalOpen, songTitle, playlist, setPlaylist}) {
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

    const closeModal = () => {
        setSearchModalOpen(false);
    };

    const clickSong = (item) => {
        const newSong = {
            id: item.trackId,
            artwork: item.artworkUrl100,
            trackname: item.trackName,
            artistname: item.artistName
        }
        setPlaylist([newSong ,...playlist])
    }

    return (
        <Modal>
            <button onClick={closeModal}>X</button>  
            {songList !== undefined &&
            <List>
                {songList.results.map((item) => (
                    <Li key={item.trackId} onClick={() => clickSong(item)}>
                        <img src={item.artworkUrl100} alt="artWork" className="albumImg"/>
                        <div className="trackName">{item.trackName}</div> 
                        <div className="artistName">{item.artistName}</div>
                    </Li>
                ))}
            </List>}
        </Modal>
    );
}
export default ReppyFiveMusicSearchModal;