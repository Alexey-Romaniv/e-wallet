import styled from 'styled-components';

export const DiagramWrapper = styled.div`
  position: relative;
  
  display: flex;
  justify-content: center;
`;

export const DiagramBalance = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${p => p.theme.colors.mainText};
  text-align: center;
  font-family: ${p => p.theme.fonts.mainFont};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;