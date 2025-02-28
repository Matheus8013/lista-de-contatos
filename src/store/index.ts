import { configureStore } from '@reduxjs/toolkit'

import contatosReducer from './reducers/contatos'
import filtroReducar from './reducers/filtro'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtro: filtroReducar
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
