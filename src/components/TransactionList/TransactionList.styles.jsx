import styled from "styled-components";
import {TransactionText} from "../Transaction/Transaction.styles";


export const TransactionList = styled.ul`


  max-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  
  @media screen and  (min-width: 768px){
    gap: 0;
  }
  
  @media screen and (min-width: 1280px){
    max-width: 715px;
    flex-grow: 1;
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
  
  @media screen and (min-width: 768px){
    position: relative;
    
    padding: 8px 0;
    
  &:not(:last-child):before{
    content: '';
    position: absolute;
  bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #DCDCDF;
    filter: drop-shadow(0px 1px 0px rgba(255, 255, 255, 0.60));
  
  }
    
  }
`

export const TransactionHeader = styled.div`
display: none;


  margin-top: 20px;
  margin-bottom: 8px;
  padding: 15px 20px;
    
  border-radius: 30px;
  background: ${p => p.theme.colors.white};
  @media screen and (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Создаем гибкую сетку с минимальной шириной столбца 200px и автоматически размещаем элементы в ряд */
    //grid-gap: 20px; /* Добавляем отступ между столбцами */
    //& p:last-child{
    //  justify-content: flex-end;
    //}
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
`;

export const TransactionListWrapper = styled.div`
  margin-top: 32px;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    border-radius: 0;
  }

  overflow-y: auto;
  max-height: 480px;

  &::-webkit-scrollbar {
    width: 6px; /* Ширина скролла */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.income}; /* Цвет полосы скролла */
    border-radius: 3px; /* Закругление углов */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* Цвет фона скролла */
  }
`;

export const TransactionTableWrapper = styled.div`
  width: 100%;
`;

export const EmptyListText = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height:normal;
  margin-top: 15px;
  
  text-align: center;
`;