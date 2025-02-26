import styled from 'styled-components'
import { Button } from '../../styles/styles'
import variaveis from '../../styles/variaveis'

export const Input = styled.input`
  border: 1px solid #ddd;
  width: 40%;
  font-size: 16px;
  border-radius: 24px;
  text-align: center;
  padding: 12px 16px;
  transition: all 0.5 ease;
  border: none;
  color: #333;

  &:focus {
    outline: none;
  }
`

export const ButtonAdd = styled(Button)`
  font-size: 16px;
  border-radius: 24px;
  border: none;
  margin-top: 5.25px;
  background-color: ${variaveis.verde};
  color: #fff;
  font-weight: bold;
  padding: 12px 16px;
`
