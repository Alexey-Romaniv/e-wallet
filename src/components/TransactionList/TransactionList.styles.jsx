import styled from "styled-components";
import {TransactionText} from "../Transaction/Transaction.styles";


export const TransactionList = styled.ul`
  margin-top: 32px;

  max-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  
  @media screen and  (min-width: 768px){
    margin-top: 0;
  }
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

export const TransactionHeader = styled.div`
display: none;


  margin-top: 20px;
  margin-bottom: 16px;
  padding: 15px 20px;
    
  border-radius: 30px;
  background: ${p => p.theme.colors.white};
  @media screen and (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Создаем гибкую сетку с минимальной шириной столбца 200px и автоматически размещаем элементы в ряд */
    //grid-gap: 20px; /* Добавляем отступ между столбцами */
    & p:last-child{
      justify-content: flex-end;
    }
    & p:nth-child(2),
    & p:nth-child(5){
      justify-content: center;
    }
  }
`

export const TransactionTitle = styled.p`
display: flex;

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`