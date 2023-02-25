import styled from "styled-components";

function ReppyFiveMusicSearchModal({ setModalOpen, songTitle }) {
    
    const Modal = styled.div`
        width: 50px;
        height: 50px;
        background-color: #ffffff;
    `
    
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <Modal>
            <button onClick={closeModal}>
                X
            </button>
        </Modal>
    );
}
export default ReppyFiveMusicSearchModal;