import styled from 'styled-components';
import sprite from "../../assets/icons/InlineSprite.svg"

const Button = styled.button`
  border: none;
  
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  width: 100%;
  max-width: 280px;
  height: 50px;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px){
    max-width: 300px;
  }
`
export const MainBtn = styled(Button)`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.mainBtn};
  margin-bottom: 20px;
`;

export const SecondBtn = styled(Button)`
  color: ${p => p.theme.colors.secondaryBtn};
  background-color: ${p => p.theme.colors.white};
  
  border: 1px solid ${p => p.theme.colors.secondaryBtn};
`

export const ShowModalBtn = styled.button`
  border: none;
  outline: none;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: fixed;
  right: 20px;
  bottom: 20px;
  
  width: 44px;
  height: 44px;
border-radius: 50%;
  
  background-color: #24CCA7;
  background-image: url("../../assets/icons/InlineSprite.svg#plus");
  
  background-position: center;
  //background-size: 20px 20px;
  
  /* green btn */

  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
`