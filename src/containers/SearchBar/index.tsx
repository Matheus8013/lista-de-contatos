import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '../../styles/global'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const SearchBar = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.SearchBar>
      <Input
        type="text"
        placeholder="Pesquisar Contatos"
        value={termo}
        onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
      />
      <S.ButtonAdd onClick={() => navigate('/novo')}>Adicionar</S.ButtonAdd>
    </S.SearchBar>
  )
}

export default SearchBar
