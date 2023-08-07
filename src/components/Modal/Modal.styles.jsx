import styled from 'styled-components';
import closeBtn from '../../assets/images/closeBtn.svg'

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 66px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  
  @media screen and (min-width: 768px){
    top: 40px;
  }
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


  @media screen and (min-width: 768px){
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    max-width: 540px;
    height: auto;
    padding: 40px 80px;
    border-radius: 20px;
  }
`;

export const CloseButton = styled.button`
  
  display: none;
  
  position: absolute;
  top: 20px;
  right: 20px;
  
  width: 16px;
  height: 16px;
  
  border: none;
  cursor: pointer;
  background: url(${closeBtn});
  background-size: contain;
  
  
  @media screen and (min-width: 769px){
    display: block;
  }
`;

export const ModalTitle = styled.h2`
  font-family: ${p => p.theme.fonts.titleFont};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: calc(36/24);
  text-align: center;
`

export const DesktopModalFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  
  @media screen and (min-width: 768px){
    flex-direction: row;
    gap: 30px;
    align-items: flex-end;
  }
`;

export const ModalButtonsWrapper = styled.div`
    @media screen and (min-width: 768px){
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`;