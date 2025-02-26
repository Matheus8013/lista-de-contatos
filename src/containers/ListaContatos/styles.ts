import styled from 'styled-components'

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 90%;
  }
`
