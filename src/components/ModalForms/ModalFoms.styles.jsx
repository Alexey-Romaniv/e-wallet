import styled from "styled-components";
import {Field, Form} from "formik";
import {DesktopDatePicker} from "@mui/x-date-pickers";



export const ModalForm = styled(Form)`
display: flex;
  flex-direction: column;
  gap: 40px;
`


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


export const ModalDate = styled(DesktopDatePicker)({
    '& .MuiFormControl-root': {
        width: "100%",
    },
    '& .MuiInputBase-input': {
        border: 'none',
        borderRadius: '0',
    },
    '& .MuiInputBase-input::placeholder': {
        color: 'blue', // Изменить цвет плейсхолдера
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: p => p.theme.colors.income,
        // borderColor: `green`,
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: p => p.theme.colors.income, // Замените 'green' на желаемый цвет при наведении
    },
    '& .MuiOutlinedInput-root': {

        '& fieldset': {
            border: 'none',
            borderRadius: '0',
            // borderBottom: '2px solid' + ((p) => p.theme.colors.secondaryText), // Серая линия снизу
            borderBottom: `2px solid`, // Серая линия снизу
            borderColor: p => p.theme.colors.secondaryText,
        },


    },
});
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
  color: ${p => p.theme.colors.mainText};
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

export const SelectInput = styled(ModalInput)`
  padding: 0;
  border: none;
  
  &:hover,&:focus{
    border: none;
  }
  .Select__control {
    padding: 0 20px  8px;
    
    width: 100%;
    border: none;
    border-radius: 0;
    cursor: pointer;
    background-color: transparent;
    box-shadow: none;
    border-bottom: 2px solid ${p => p.theme.colors.secondaryText} ;
    
    &:hover{
      border-bottom-color: ${p => p.theme.colors.income} ;

    }

  }

  //.Select__control:hover {
  //  border-color: blueviolet;
  //}

  .Select__control--is-focused {
outline: none;
border: none;
    box-shadow: none;
    border-bottom:2px solid ${p => p.theme.colors.income} ;


    .Select__indicator{
      color: ${p => p.theme.colors.income}
    }
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.70);
    box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.10);
    backdrop-filter: blur(25px);
  }
  .Select__placeholder{
    color: ${p => p.theme.colors.secondaryText};
    font-family: ${p => p.theme.fonts.mainFont};
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: calc(1.5);
    background-color: transparent;
  }
  .Select__indicator {
    padding-right: 0;
    color: ${p => p.theme.colors.secondaryText};
  }

  .Select__option {
    /* Стили для вариантов выбора */
    color: #000;
    background-color: transparent;
    /* background-color: rgba(0, 0, 0, 0.2); */

    &:hover, &:active {
      color: #FF6596;
      background: transparent;
    }
  }

  .Select__value-container {
    padding: 0;
    /* Стили для контейнера выбранного значения */
  }
`;
