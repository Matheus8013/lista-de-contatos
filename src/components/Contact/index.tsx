import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ButtonCancel } from '../../containers/Form/styles'
import * as S from './styles'
import { ButtonAdd } from '../../containers/SearchBar/styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaeditando] = useState(false)
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [nomeOriginal, telefoneOriginal, emailOriginal])

  function cancelarEdição() {
    setEstaeditando(false)
    setNome(nomeOriginal)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
  }

  return (
    <S.Card>
      <S.Nome
        disabled={!estaEditando}
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
      ></S.Nome>
      <S.Telefone
        disabled={!estaEditando}
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
      ></S.Telefone>
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      ></S.Email>
      <S.Controls>
        {estaEditando ? (
          <>
            <ButtonAdd
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    telefone,
                    email,
                    id
                  })
                )
                setEstaeditando(false)
              }}
            >
              Salvar
            </ButtonAdd>
            <ButtonCancel onClick={cancelarEdição}>Cancelar</ButtonCancel>
          </>
        ) : (
          <>
            <S.ButtonEdit onClick={() => setEstaeditando(true)}>
              Editar
            </S.ButtonEdit>
            <ButtonCancel onClick={() => dispatch(remover(id))}>
              Remover
            </ButtonCancel>
          </>
        )}
      </S.Controls>
    </S.Card>
  )
}

export default Contato
