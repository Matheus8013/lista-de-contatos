import styled from 'styled-components'
import { ButtonAdd, Input } from '../Cabecalho/style'
import variaveis from '../../styles/variaveis'

export const InputForm = styled(Input)`
  width: 80%;
  background-color: #f5f5f5;
  padding: 16px;
  display: block;
  margin-bottom: 8px;
  font-size: 20px;
`

export const ButtonFormVoltar = styled(ButtonAdd)`
  background-color: ${variaveis.vermelho};
  margin-left: 8px;
`
