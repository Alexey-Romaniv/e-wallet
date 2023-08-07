import styled from "styled-components";
import bgImg from '../../assets/images/authImage.svg'
import bgRegister from  '../../assets/images/authRegister.svg';
export const AuthLogoText = styled.h1`
  display: none;
  font-family: ${p => p.theme.fonts.titleFont};
  color: ${p => p.theme.colors.titleText};
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:before{
    content: '';
    display: block;
    background-image: ${p => p.page === 'register' ? `url(${bgImg})`  : `url(${bgRegister})`} ;
    background-repeat: no-repeat;
    background-size: contain;
    width: 260px;
    height: 250px;
  }
  
  @media screen and (min-width: 768px){
    display: flex;
    align-items: center;
    gap: 40px;
  }
  
  @media screen and (min-width: 1280px){
    flex-direction: column;
    
    &:before{
      width: 410px;
      height: 412px;
    }
  }
`;