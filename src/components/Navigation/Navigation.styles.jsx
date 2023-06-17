import styled from "styled-components";
import {NavLink} from "react-router-dom";


export const NavList = styled.ul`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 32px;
`;

export const NavigationLink = styled(NavLink)`
  color: #6E78E8;
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