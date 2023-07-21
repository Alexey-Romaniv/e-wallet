import styled from "styled-components";

function getBorderColor(type) {
    return type === "+" ? "#24CCA7" : "#FF6596";

}

export const TransactionText = styled.p`
  position: relative;
  

  background-color: ${p => p.theme.colors.white};
  
  padding: 12px 20px 8px;
  
  display: flex;
  justify-content: space-between;

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
export const Sum = styled.span`
  color: ${p => (p.type === '+' ? p.theme.colors.income : p.theme.colors.expense)};
`;

export const TransactionComment = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Дополнительные стили для комментария */
`;
