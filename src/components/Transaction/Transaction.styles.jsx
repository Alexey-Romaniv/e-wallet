import styled from "styled-components";

function getBorderColor(type) {
    return type === "+" ? "#24CCA7" : "#FF6596";

}

export const TransactionText = styled.p`
  position: relative;
  

  background-color: ${p => p.theme.colors.white};
  
  padding: 12px 20px 8px;

  font-family: ${p => p.theme.fonts.mainFont};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27/18);
  /* identical to box height */
  color: ${p => p.theme.colors.mainText};
  
  &:before{
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    background-color: ${props => getBorderColor(props.type)};
    width: 5px;
    height: 100%;
    
  }
`