import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { Container, Titulo } from '../../styles/global'
import { ButtonAdd } from '../SearchBar/styles'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import Contato from '../../models/Contato'
import { registrar } from '../../store/reducers/contatos'

const CadastrarContato = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    const constatoParaAdicionar = new Contato(nome, telefone, email, 15)

    dispatch(registrar(constatoParaAdicionar))
    navigate('/')
  }

  return (
    <Container>
      <S.Form onSubmit={cadastrarContato}>
        <Titulo>Novo contato</Titulo>
        <S.InputForm
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          name="nome"
          type="text"
          placeholder="Nome do contato"
        />
        <S.InputForm
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          name="telefone"
          type="text"
          placeholder="Número do contato"
        />
        <S.InputForm
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          name="email"
          type="email"
          placeholder="email do contato"
        />
        <ButtonAdd type="submit">Adicionar</ButtonAdd>
        <S.ButtonCancel onClick={() => navigate('/')} type="button">
          Cancelar
        </S.ButtonCancel>
      </S.Form>
    </Container>
  )
}

export default CadastrarContato
