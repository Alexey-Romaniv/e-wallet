import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 66px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  
  width: 100%;
  height: 100%;
  //transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: #555;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  font-family: ${p => p.theme.fonts.titleFont};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: calc(36/24);
  text-align: center;
`