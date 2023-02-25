import styled from "styled-components";
import { useEffect } from "react";

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    height: 40vh;
    width: 40vh;
    background-color: white;
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
      
    return(
        <ModalWrapper>
            gogo
        </ModalWrapper>
    );
}

export default ReppyFiveMakePlaylistmodal