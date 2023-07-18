import styled from "styled-components";
import plus from '../../assets/icons/plus.png'
import minus from '../../assets/icons/minus.png'





export const ModalToogleBtn = styled.input`
  touch-action: manipulation;
  
  position: relative;
  height: 40px;
  width: 80px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background: #FFFFFF;
  /* Gray 5 */

  border: 1px solid #E0E0E0;
  border-radius: 30px;
  transition: all .3s ease;



  &::before{
    content: "";
    position: absolute;
    color: ${p => p.theme.colors.white};
    //left: calc(1.5rem - 1.6rem);
    //top: calc(1.5rem - 1.6rem);
    left: -4px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    width: 44px;
    cursor: pointer;
    border-radius: 9999px;
    box-shadow: 0 6px 15px rgba(36, 204, 167, 0.5);
    font-size: 30px;
    background-image: url("${plus}");
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${p => p.theme.colors.income};
    transition: all .3s ease;
  }

  ${p => p.checked === true} &::before{
    content: "";
    background-image: url("${minus}");
    transform: translate(101%, -50%);
    background-color: ${p => p.theme.colors.expense};
    box-shadow: 0 6px 15px rgba(255, 101, 150, 0.5)
  }
`
export const ToogleLabel = styled.label`

`



export const ToogleWrapper = styled.div`
  
display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
     
  & ${ToogleLabel}:first-child{
    color: ${p => p.type === "true" ? "#24CCA7" : "#E0E0E0"};
  }  
  & ${ToogleLabel}:last-child{
    color: ${p => p.type === "false" ? "#FF6596" : "#E0E0E0"};
  }
`
