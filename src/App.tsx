import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import GlobalStyles from './styles/global'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <RouterProvider router={rotas} />
    </Provider>
  )
}

export default App
