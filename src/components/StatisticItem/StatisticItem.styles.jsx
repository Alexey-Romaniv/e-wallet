import styled from 'styled-components'

export const CategoryItem = styled.li`
  position: relative;
  
  color: #000;
  text-transform: capitalize;
  font-family: Circe, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 112.5%; /* 112.5% */
  padding: 0 0 16px 60px;
  border-bottom: 1px #DCDCDF solid;
  filter: drop-shadow(0px 1px 0px rgba(255, 255, 255, 0.60));
  
  &:before{
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    left: -2px;
    
    background-color: ${p => p.color};
  }
`