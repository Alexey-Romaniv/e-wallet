import styled from 'styled-components';

export const ListTitle = styled.p`
  display: flex;
  justify-content: space-between;

  padding: 15px 20px;
  
  border-radius: 30px;
  
  background-color: ${p => p.theme.colors.white};

  color: ${p => p.theme.colors.mainText};
  font-family: ${p => p.theme.fonts.mainFont};
  font-size: 18px;
  line-height: 1.3;
  font-style: normal;
  font-weight: 700;
`;

export const StatisticFinances = styled.div`
  padding-inline: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin-top: 16px;
`;

export const Finances = styled.p`
  display: flex;
  justify-content: space-between;
  
  color: ${p => p.theme.colors.mainText};
  font-family: ${p => p.theme.fonts.mainFont};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  span:last-child{
    color: ${p => p.color};
  }
`