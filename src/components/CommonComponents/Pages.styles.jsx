import styled from 'styled-components';
import bgBlue from '../../assets/icons/bg-blue.svg'
import bgRed from '../../assets/icons/bg-red.svg'

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
  position: relative;
      background: url(${bgBlue}), url("${bgRed}");
      background-repeat: no-repeat;
      background-position: 0 100%, 100% 0;
  z-index: 0;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(25px);
      z-index: -1;
    }
  }
`;

export const MainFlexWrapper = styled.div`
  display: flex;
  gap: 32px;

  margin-bottom: 20px;
`;

export const CurrencyWrapper = styled.div`
display: none;
  
  flex: 1;
  
  @media screen and (min-width: 768px){
    display: block;
  }
`;

export const HomeInfoWrapper = styled.div`
flex: 1;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StatisticTitle = styled.h2`
  text-align: left;
  color: ${p => p.theme.colors.titleText};
  font-family: ${p => p.theme.fonts.titleFont};
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 8px;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const StatisticFlexWrapper = styled.div`
@media screen and (min-width: 768px) {
  display: flex;
  gap: 32px;
  
  & > div {
    flex: 1;
  }
  
}
`;

