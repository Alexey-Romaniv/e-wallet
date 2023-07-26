import styled from "styled-components";
import {NavLink} from "react-router-dom";


export const NavList = styled.ul`
  margin-top: 12px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 12px;

    margin: 0 0 28px;
    
    & li:last-child{
      display: none;
    }
  }
`;


export const NavIcon = styled.svg`
  fill: currentColor;
  width: 44px;
  height: 44px;

  @media screen and (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
`
export const NavText = styled.span`
display: none;

  color: ${p => p.theme.colors.mainText};
  font-family: ${p => p.theme.fonts.titleFont};
  font-size: 18px;
  font-style: normal;
  line-height: normal;
  
  @media screen and (min-width: 768px) {
    display: inline-block;

    
  }
`;
export const NavigationLink = styled(NavLink)`
  color: #6E78E8;

  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 400;
  &.active {
    font-weight: 700;
    /* Дополнительные стили для активного состояния */
  }
`;
