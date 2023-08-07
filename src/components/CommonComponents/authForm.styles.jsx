import styled from 'styled-components'
import {ErrorMessage, Field, Form} from "formik";
import {PageWrapper} from "./Pages.styles";


export const AuthBackground = styled.div`
background: ${p => p.theme.colors.white};
  width: 100vw;
  height: 100vh;
`;
export const AuthWrapper = styled(PageWrapper)`
  @media screen and (max-width: 767px) {
    background: ${p => p.theme.colors.white};
  }
  
  @media screen and (min-width: 768px) {

    &:before {
      backdrop-filter: blur(0);
    }
  }
`;
export const AuthFlexWrapper = styled.div`

    min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  
  & button{
    margin-inline:auto;
  }
  
  @media screen and (min-width: 768px){
    justify-content: flex-start;
    padding-top: 60px;
  }
  
  @media screen and (min-width: 1280px){
    margin-left: 50px;
    
    flex-direction: row;
    padding-top: 0;
    justify-content: space-around;
    
    &:before{
      content: '';
      position: absolute;
      z-index: -1;
      right: -10%;
      width: 70%;
      height: 100%;
    
      
      background: rgba(255, 255, 255, 0.40);
      backdrop-filter: blur(25px);
    }
  }
`;
export const FormWrapper = styled(Form)`
display: flex;
  flex-direction: column;
  gap: 40px;
`
export const InputWrapper = styled.div`
position: relative;
`
export const Input = styled(Field)`
  color: ${p => p.theme.colors.mainText};
background-color: transparent;  
  border: none;
  border-bottom: 1px solid #E0E0E0 ;
  
  padding: 0 0 8px 54px;
  
  &::placeholder{
    color: ${p => p.theme.colors.secondaryText};

  }
  &:focus {
   
    outline: none;
  }
  &:hover ~ svg, 
  &:focus ~ svg{
    //fill: #000000;
    transform: scale(1.2);
  }
  
  @media screen and (min-width: 768px){
    width: 410px;
  }
  
`;

export const Svg = styled.svg`
  fill: #E0E0E0;

  position: absolute;
  top: 0;
  left: 10px;
  
  width: 24px;
  height: 24px;
    
  transition: transform ease-in-out 500ms;
`;

export const FormError = styled(ErrorMessage)`
  position: absolute;
  left: 5px;
  bottom: -20px;
  font-size: 12px;
  line-height: 1.3;
  color: red;
`

export const AuthFormWrapper = styled.div`
    
    @media screen and (min-width: 768px){
      border-radius: 20px;
      background-color: ${p => p.theme.colors.white};
      
      padding: 40px 60px 60px;

      margin: 0 auto;
    }
`;