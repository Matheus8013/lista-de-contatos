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

  const contaContaos = () => {
    const contatos = filtraContatos().length
    if (contatos < 1) {
      return 'Nenhum contato foi encrontrado'
    } else {
      return `${contatos} contato(s) encontrado(s)`
    }
  }

  const mensagem = contaContaos()

  return (
    <Container>
      <Titulo>{mensagem}</Titulo>
      <List>
        {filtraContatos().map((c) => (
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
