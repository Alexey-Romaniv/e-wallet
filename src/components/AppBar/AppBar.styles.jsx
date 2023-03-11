import styled from 'styled-components'
import {NavLink} from "react-router-dom";
import {Container} from "../CommonComponents/Container.styles";

export const LogoImg = styled.img`
 width: 30px;
  
  @media screen and  (min-width: 768px){
    width: 40px;
  }

  
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;  
  gap: 15px;

  font-family: ${p => p.theme.fonts.titleFont};
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;
  
  color: ${(p) => p.theme.colors.titleText};
  
  @media screen and (min-width: 768px){
    font-size: 30px;
    
    gap: 20px;
  }
  
`

export const Name = styled.span`
  color: #BDBDBD;

  font-size: 18px;
  line-height: 1.5;
`
export const HeaderContainer = styled(Container)`
display: flex;
  justify-content: space-between;
  align-items: center;
`