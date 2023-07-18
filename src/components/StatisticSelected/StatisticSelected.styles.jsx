import styled from 'styled-components'
import Select from "react-select";

export const SelectDate = styled(Select)`
  .Select__control {
    height: 50px;
    width: 100%;
    border-radius: 30px;
    border: 2px solid #000;
    background: transparent;
    cursor: pointer;

    &:hover {
      border: 2px solid #000;
      box-shadow: 0 0 0 1px black;
      outline: none;
      stroke-width: 1px;

    }
  }
  .select__control {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }

  //.Select__control:hover {
  //  border-color: blueviolet;
  //}

  .Select__control--is-focused {
    box-shadow: 0 0 0 1px black;
    outline: none;
    stroke-width: 1px;

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
    color: #000;
    font-family: Circe, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: transparent;
  }
  .Select__indicator {
    color: #000;
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
    /* Стили для контейнера выбранного значения */
  }
`

export const SelectContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 20px;
  
display: flex;
  flex-direction: column;
  gap: 20px;
`