import { ButtonAdd, Input } from '../../components/Cabecalho/style'
import { Header } from './styles'

const Cabecalho = () => {
  return (
    <Header>
      <Input placeholder="Pesquisar" />
      <ButtonAdd type="button">Adicionar</ButtonAdd>
    </Header>
  )
}

export default Cabecalho
