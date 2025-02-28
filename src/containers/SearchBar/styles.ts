import styled from 'styled-components'
import { Button } from '../../styles/global'
import variaveis from '../../styles/variaveis'

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #f5f5f5;
  box-shadow: #333;
  padding: 16px;
  border-bottom: #eee solid 8px;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 64px;
`

export const ButtonAdd = styled(Button)`
  border: none;
  border-bottom: 8px solid ${variaveis.verde3};
  background-color: #fff;
  color: #000;
  background-color: ${variaveis.verde2};

  &:hover {
    background-color: ${variaveis.verde};
    color: #fff;
  }
`
