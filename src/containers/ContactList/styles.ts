import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-gap: 15px;
  }
`
