import styled from "styled-components";
import { useEffect, useState } from "react";

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    height: 40vh;
    width: 40vh;
    background-color: white;
`

const InputImgButton = styled.input`

`

const InputImgPreview = styled.div`

`
const InputImg = styled.img`

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
      
    return(
        <ModalWrapper>
            <InputImgButton
            type="file"
            onChange={(e) => {
              encodeFileToBase64(e.target.files[0]);
            }}
            />
            <InputImgPreview>
              {imageSrc && <InputImg src={imageSrc} alt="preview-image"/>}
            </InputImgPreview>
        </ModalWrapper>
    );
}

export default ReppyFiveMakePlaylistmodal