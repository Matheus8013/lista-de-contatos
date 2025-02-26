import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle from './styles/styles'
import Home from './pages/Home'
import Adicionar from './pages/Adicionar'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Adicionar />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
