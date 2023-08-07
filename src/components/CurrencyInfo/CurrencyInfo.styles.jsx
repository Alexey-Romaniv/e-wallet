import  styled from 'styled-components';
import backgroundImage from '../../assets/images/currencyBackground.png'

export const CurrencyTable = styled.table`
  width: 100%;
  height: 100%;
  
  border-radius: 30px;
  background-color: #4A56E2;
  border-spacing: 0;
  
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fonts.mainFont};
  
  background-image: url(${backgroundImage});
  background-position: bottom;
  background-size: 100% 94px;
  background-repeat: no-repeat;
`;

export const CurrencyHeader = styled.tr`
display: flex;
  justify-content: space-between;

  border-radius: 30px 30px 0 0;
  background-color: rgba(255, 255, 255, 0.2); /* Установить прозрачность фона на 0.7 (от 0 до 1) */

  
  padding: 11px 20px 12px;

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CurrencyBody = styled.tr`
  display: flex;
  justify-content: space-between;
  margin: 12px 20px 16px;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  background-image: url("../../assets/images/currencyBackground.png");
  background-position: bottom;
  background-size: cover;
`;