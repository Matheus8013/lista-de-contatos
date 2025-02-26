import {
  ButtonEdit,
  ButtonRemove,
  Card,
  Controls,
  Email,
  Nome,
  Telefone
} from '../../components/Contatos/style'
import { Container, Titulo } from '../../styles/styles'
import { ListContainer } from './styles'

const Lista = () => {
  return (
    <Container>
      <Titulo>Contato(s) excontrado(s)</Titulo>
      <ListContainer>
        <Card>
          <Card>
            <Nome>Matheus</Nome>
            <Telefone>(11)94678-1264</Telefone>
            <Email>teste@tete.com</Email>
            <Controls>
              <ButtonEdit>Editar</ButtonEdit>
              <ButtonRemove>Excluir</ButtonRemove>
            </Controls>
          </Card>
        </Card>
        <Card>
          <Card>
            <Nome>Matheus</Nome>
            <Telefone>(11)94678-1264</Telefone>
            <Email>teste@tete.com</Email>
            <Controls>
              <ButtonEdit>Editar</ButtonEdit>
              <ButtonRemove>Excluir</ButtonRemove>
            </Controls>
          </Card>
        </Card>
        <Card>
          <Card>
            <Nome>Matheus</Nome>
            <Telefone>(11)94678-1264</Telefone>
            <Email>teste@tete.com</Email>
            <Controls>
              <ButtonEdit>Editar</ButtonEdit>
              <ButtonRemove>Excluir</ButtonRemove>
            </Controls>
          </Card>
        </Card>
        <Card>
          <Card>
            <Nome>Matheus</Nome>
            <Telefone>(11)94678-1264</Telefone>
            <Email>teste@tete.com</Email>
            <Controls>
              <ButtonEdit>Editar</ButtonEdit>
              <ButtonRemove>Excluir</ButtonRemove>
            </Controls>
          </Card>
        </Card>
        <Card>
          <Card>
            <Nome>Matheus</Nome>
            <Telefone>(11)94678-1264</Telefone>
            <Email>teste@tete.com</Email>
            <Controls>
              <ButtonEdit>Editar</ButtonEdit>
              <ButtonRemove>Excluir</ButtonRemove>
            </Controls>
          </Card>
        </Card>
      </ListContainer>
    </Container>
  )
}

export default Lista
