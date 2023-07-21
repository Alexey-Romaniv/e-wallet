import styled from 'styled-components'

export const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;


  padding: 14px 20px;

  
  color: #000;
  text-transform: capitalize;
  font-family: ${p => p.theme.fonts.mainFont};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 112.5%; /* 112.5% */
  border-bottom: 1px #DCDCDF solid;
  filter: drop-shadow(0px 1px 0px rgba(255, 255, 255, 0.60));
  

`

export const StatisticCategory = styled.p`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 112.5%; /* 112.5% */


  &:before{
    content: '';
    
    
    width: 24px;
    height: 24px;
    border-radius: 2px;

    background-color: ${p => p.color};
  }
`;

export const StatisticSum = styled.p`

`;