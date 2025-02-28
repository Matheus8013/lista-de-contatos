import styled from 'styled-components'
import { ButtonAdd } from '../../containers/SearchBar/styles'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  border-radius: 40px;
  font-size: 1rem;
  color: #000;
  line-height: 1.5rem;
  display: block;
  padding: 16px;
  overflow: hidden;
  border-bottom: 8px solid #eee;
  border-right: 8px solid #eee;
  /* border-left: 8px solid #eee; */
`

export const Nome = styled.textarea`
  font-size: 24px;
  margin-top: 8px;
  margin-left: 16px;
`
export const Telefone = styled.textarea`
  font-size: 14px;
  display: block;
  margin-bottom: 10px;
  margin-left: 16px;
`
export const Email = styled(Telefone)`
  margin-bottom: 12px;
`

export const Controls = styled.div`
  display: flex;
  border-top: solid 3px #eee;
  padding-top: 8px;
  margin-left: 16px;
`

export const ButtonEdit = styled(ButtonAdd)`
  background-color: ${variaveis.azul2};
  border-bottom: 8px solid ${variaveis.azu3};

  &:hover {
    background-color: ${variaveis.azul};
  }
`
