import styled from "styled-components";
import {TransactionText} from "../Transaction/Transaction.styles";


export const TransactionList = styled.ul`
  margin-top: 32px;

  max-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;
export const TransactionItem = styled.li`
  ${TransactionText} {
    color: ${props => props["type"]};
  }
  
  width: 100%;
  
  border-radius: 10px;
  overflow: hidden;
  
  display: flex;
  flex-direction: column;
  gap: 1px;
`