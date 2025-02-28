import styled from 'styled-components'
import { Input } from '../../styles/global'
import { ButtonAdd } from '../SearchBar/styles'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  padding: 5.6vw;
`

export const InputForm = styled(Input)`
  background-color: #f5f5f5;
  margin-bottom: 8px;
  display: block;
  width: 80%;
  padding: 20px;
  font-size: 18px;
  border-bottom: #eee solid 8px;
`

export const ButtonCancel = styled(ButtonAdd)`
  background-color: ${variaveis.vermelho2};
  color: #000;
  margin-left: 8px;
  border-bottom: 8px solid ${variaveis.vermelho3};

  &:hover {
    background-color: ${variaveis.vermelho};
  }
`
