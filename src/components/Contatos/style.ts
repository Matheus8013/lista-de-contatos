import styled from 'styled-components'
import { Button, Titulo } from '../../styles/styles'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  border-radius: 40px;
  font-size: 1rem;
  color: #333;
  line-height: 1.5rem;
  display: block;
  padding: 16px;
  overflow: hidden;
`

export const Nome = styled(Titulo)`
  font-size: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Telefone = styled.p`
  font-size: 14px;
  display: block;
  margin-bottom: 10px;
`
export const Email = styled(Telefone)``

export const Controls = styled.div`
  display: flex;
  padding-top: 10px;
`

export const ButtonEdit = styled(Button)`
  background-color: transparent;
  border: 1px solid ${variaveis.azulEscuro};
  color: #000;
  margin-right: 8px;
  padding: 8px;
  border-radius: 12px;

  &:hover {
    background-color: ${variaveis.azulEscuro};
    color: #fff;
  }
`

export const ButtonRemove = styled(Button)`
  border: ${variaveis.vermelho} 1px solid;
  background-color: ${variaveis.vermelho};
  color: #fff;
  border-radius: 12px;
  padding: 8px;
`
