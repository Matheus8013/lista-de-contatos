import { Titulo } from '../../styles/styles'
import { ButtonAdd } from '../Cabecalho/style'
import { Controls } from '../Contatos/style'
import { ButtonFormVoltar, InputForm } from './styles'

const Formulario = () => {
  return (
    <>
      <Titulo>Novo Contato</Titulo>
      <form>
        <InputForm required type="text" placeholder="Nome do contato" />
        <InputForm required type="number" placeholder="O número do contato" />
        <InputForm required type="email" placeholder="o email do contato" />
        <Controls>
          <ButtonAdd>Adicionar</ButtonAdd>
          <ButtonFormVoltar>Cancelar</ButtonFormVoltar>
        </Controls>
      </form>
    </>
  )
}

export default Formulario
