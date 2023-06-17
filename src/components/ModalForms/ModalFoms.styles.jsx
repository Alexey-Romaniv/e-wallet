import styled from "styled-components";
import {Field, Form} from "formik";

import dateIcon from "../../assets/icons/date.svg"


export const ModalForm = styled(Form)`
display: flex;
  flex-direction: column;
  gap: 40px;
`

export const SelectInput = styled.select`
  color: ${({ value }) => (value === "" ? "grey" : "black")};
//color: red;
background: none;
  padding: 0 20px 8px;


  width: 100%;

  border: none;
  outline: none;
  border-bottom: 2px solid ${p => p.theme.colors.secondaryText};

  font-family: ${p => p.theme.fonts.mainFont};
  //color: ${p => p.theme.colors.black};
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27 / 18);

  transition: border 250ms linear;


  &:hover, &:focus {
    border-bottom: 2px solid ${p => p.theme.colors.income};
  }
`;

export const SelectOption = styled.option`
  overflow: hidden;
  color: black;
  //background-color: rgba(255, 255, 255, 0.3);
  background-color: blue;
  background-color: rgba(255, 255, 255, 0.8);

  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  
  &:nth-child(2) {
    border-radius: 20px 20px 0 0;
  }
  &:last-child{
    border-radius: 0 0 20px 20px;
    background: grey;
    border-radius: 50px;
  }
`
export const ModalInput = styled(Field)`
  
  width: 100%;
  
  border: none;
  border-bottom: 2px solid ${p => p.theme.colors.secondaryText} ;
  outline: none;
  
padding: 0 20px 8px;

  font-family: ${p => p.theme.fonts.mainFont};
  color: ${p => p.theme.colors.black};
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27/18);

  transition: border 250ms linear;


  &::placeholder{
    font-family: ${p => p.theme.fonts.mainFont};
    color: ${p => p.theme.colors.secondaryText};
    font-weight: 700;
    font-size: 18px;
    line-height: calc(27/18);
  }

  &:hover, &:focus{
    border-bottom: 2px solid ${p => p.theme.colors.income} ;
  ;
`


export const ModalDate = styled(ModalInput)`
  &::placeholder{
    display: flex;
  justify-content: space-between;
  }

  &::-webkit-calendar-picker-indicator::before {
    content: '';
    background-image: url(../../assets/icons/date.png);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    filter: invert(1); /* инвертировать цвета иконки */
  }

`

export const ModalComment = styled.div`
   & textarea{
    
  width: 100%;
  min-height: 84px;

  resize: none;
  outline: none;
  border: none;
  border-bottom: 2px solid ${p => p.theme.colors.secondaryText} ;
  padding: 0 20px;

  font-family: ${p => p.theme.fonts.mainFont};
  color: ${p => p.theme.colors.secondaryText};
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27/18);
  
  transition: border 250ms linear;

  &::placeholder{
    font-family: ${p => p.theme.fonts.mainFont};
    color: ${p => p.theme.colors.secondaryText};
    font-weight: 700;
    font-size: 18px;
    line-height: calc(27/18);
  }
  
  &:hover, &:focus{
    border-bottom: 2px solid ${p => p.theme.colors.income} ;
  
  }
  }
`