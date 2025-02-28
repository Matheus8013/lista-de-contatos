import { useSelector } from 'react-redux'
import Contato from '../../components/Contact'
import { Container, Titulo } from '../../styles/global'
import { List } from './styles'
import { RootReducer } from '../../store'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  const contatos = filtraContatos()

  return (
    <Container>
      <Titulo>
        {contatos.length < 1
          ? 'Nenhum contato encontrada'
          : `${contatos.length} contato(s) encontrado(s)`}
      </Titulo>
      <List>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              nome={c.nome}
              telefone={c.telefone}
              email={c.email}
              id={c.id}
            />
          </li>
        ))}
      </List>
    </Container>
  )
}

export default ContactList
