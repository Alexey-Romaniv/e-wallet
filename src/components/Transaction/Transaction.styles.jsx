import styled from "styled-components";

function getBorderColor(type) {
    return type === "+" ? "#24CCA7" : "#FF6596";
}

export const TransactionText = styled.span`
  font-family: ${p => p.theme.fonts.mainFont};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27/18);
  /* identical to box height */
  color: ${p => p.theme.colors.mainText};
  
  @media screen and (min-width: 768px){
    font-size: 16px;
    font-weight: 400;
    
    &:first-child{
    display: none;
    }
  }
`;

export const Sum = styled.span`
  color: ${p => (p.type === '+' ? p.theme.colors.income : p.theme.colors.expense)};
`;

export const TransactionComment = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Дополнительные стили для комментария */
`;

export const TransactionRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  @media (min-width: 768px) {
    padding: 0 20px;
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Создаем гибкую сетку с минимальной шириной столбца 200px и автоматически размещаем элементы в ряд */
    //grid-gap: 20px; /* Добавляем отступ между столбцами */
    gap: 0;
    & div:last-child{
      justify-content: flex-end;
    }
    & div:nth-child(2),
    & div:nth-child(5){
      justify-content: center;
    }
  }
`;

export const TransactionData = styled.div`
  flex: 1;
  padding: 12px 20px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.theme.colors.white};
  position: relative;

  &:before {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    background-color: ${props => getBorderColor(props.type)};
    width: 5px;
    height: 100%;
  }
  @media (min-width: 768px) {
    height: 52px;
    
    padding: 0;
    background-color: transparent;
    
    
    
    &:first-child {
      border-left: none;
    }
    &:before {
      bottom: 0;
      top: auto;
      width: 100%;
      height: 1px;

      background-color: #DCDCDF;
      filter: drop-shadow(0px 1px 0px rgba(255, 255, 255, 0.60));
    }
  }
`;



// import styled from "styled-components";
//
// function getBorderColor(type) {
//     return type === "+" ? "#24CCA7" : "#FF6596";
//
// }
//
// export const TransactionText = styled.p`
//   position: relative;
//
//
//   background-color: ${p => p.theme.colors.white};
//
//   padding: 12px 20px 8px;
//
//   display: flex;
//   justify-content: space-between;
//
//   font-family: ${p => p.theme.fonts.mainFont};
//   font-style: normal;
//   font-weight: 700;
//   font-size: 18px;
//   line-height: calc(27/18);
//   /* identical to box height */
//   color: ${p => p.theme.colors.mainText};
//
//   &:before{
//     content: '';
//     top: 0;
//     left: 0;
//     position: absolute;
//     background-color: ${props => getBorderColor(props.type)};
//     width: 5px;
//     height: 100%;
//
//   }
// `
// export const Sum = styled.span`
//   color: ${p => (p.type === '+' ? p.theme.colors.income : p.theme.colors.expense)};
// `;
//
// export const TransactionComment = styled.span`
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   /* Дополнительные стили для комментария */
// `;
