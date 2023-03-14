import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button, Li } from "../style";
import ReppyFiveMusicSearchModal from "./ReppyFiveMusicSearchModal";
import axios from "axios";

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    height: 40vh;
    width: 40vh;
    background-color: white;
    border-radius: 3em;

    display: flex;
    align-items: center;
`

const InputImgButton = styled.div`
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`

const InputImgPreview = styled.div`

`
const InputImg = styled.img`

`;

const InputTitle = styled.input`

`;
const Contents = styled.div`

`;

const SongInput = styled.input`

`;

const ListConfig = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SearchArea = styled.div`
  height: inherit;
`

function ReppyFiveMakePlaylistmodal({setMakePlaylistModalOpen}) {
    //prevent scroll
    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = '';
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
      }, []);
    
    const [imageSrc, setImageSrc] = useState('');
    const [searchModalOpen, setSearchModalOpen] = useState(false);
    const showSearchModal = () => {
        setSearchModalOpen(true);
    };

    const [songTitle, setSongTitle] = useState("");
    const changeSongTitle = e => {
        setSongTitle(e.target.value);
    };  
    
    const [playlistTitle, setPlaylistTitle] = useState("")
    const changePlaylistTitle = e => {
      setPlaylistTitle(e.target.value)
    }

    const [playlist, setPlaylist] = useState([]);

    const handleOnKeyPress = e => {
      if (e.key === 'Enter') {
          showSearchModal();
      }
    };

    const encodeFileToBase64 = (fileBlob) => {
      const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
          reader.onload = () => {
            setImageSrc(reader.result);
            resolve();
          };
        });
      };
    
    const postClick = () => {
      const title = JSON.stringify(playlistTitle)
      if (playlist.length === 5) {
        axios.post("/api/playlists", 
        {[title]: playlist},
        {headers: {
            'Content-Type': `application/json`}
        })
        .then( function (response) { 
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      else {
        alert("not five")
      }
    }

    return(
        <ModalWrapper>
          <ListConfig>
            <InputImgButton>
              <label htmlFor="ex_file">
                <div className="btnStart">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 30px 30px"><path fill="currentColor" d="M20 5h-3.17l-1.24-1.35A1.99 1.99 0 0 0 14.12 3H9.88c-.56 0-1.1.24-1.47.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-3 12H7a.5.5 0 0 1-.4-.8l2-2.67c.2-.27.6-.27.8 0L11.25 16l2.6-3.47c.2-.27.6-.27.8 0l2.75 3.67a.5.5 0 0 1-.4.8z"/></svg>
                </div>
              </label>
              <input
                type="file"
                id="ex_file"
                onChange={(e) => {
                  encodeFileToBase64(e.target.files[0]);
                }}
                placeholder="Put your cover:)"
              />
            </InputImgButton>
            <InputImgPreview>
              {imageSrc && <InputImg src={imageSrc} alt="preview-image"/>}
            </InputImgPreview>
            <InputTitle type="text" placeholder="Enter Title:)"/>
            <InputTitle type="text" onChange={changePlaylistTitle} placeholder="Show about your playlist:)"/>
            {playlist !== undefined &&
            playlist.map((song) => (
              <Li key={song.id}>
                <img src={song.artwork} alt="artWork" className="albumImg"/>
                <div >{song.trackname}</div>
                <div>{song.artistname}</div>
              </Li>
            ))}
            <button onClick={postClick}>Post</button>
          </ListConfig> 
          <SearchArea>
            <Contents>
                <SongInput
                value={songTitle}
                onChange={changeSongTitle}
                placeholder="Enter the title or the Artist :)"
                onKeyDown={handleOnKeyPress}
                />
                <Button width="10px" onClick={showSearchModal} >Enter</Button>
            </Contents>
            {searchModalOpen && <ReppyFiveMusicSearchModal 
            setSearchModalOpen={setSearchModalOpen}
            songTitle = {songTitle}
            playlist = {playlist}
            setPlaylist = {setPlaylist}
            />}
          </SearchArea>
        </ModalWrapper>
    );
}

export default ReppyFiveMakePlaylistmodal