import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'João da Silva',
      telefone: '(11)94478-3228',
      email: 'joao.silva@email.com',
      id: 1
    },

    {
      nome: 'Maria Oliveira',
      telefone: '(21)97732-5913',
      email: 'maria.oliveira@email.com',
      id: 2
    },

    {
      nome: 'Pedro Santos',
      telefone: '(31)93718-9012',
      email: 'pedro.santos@email.com',
      id: 3
    },

    {
      nome: 'Ana Souza',
      telefone: '(41)96412-3456',
      email: 'ana.souza@email.com',
      id: 4
    },

    {
      nome: 'Carlos Pereira',
      telefone: '(51)91822-7890',
      email: 'carlos.pereira@email.com',
      id: 5
    },

    {
      nome: 'Juliana Rocha',
      telefone: '(61)93611-1234',
      email: 'juliana.rocha@email.com',
      id: 6
    },

    {
      nome: 'Rafael Gomes',
      telefone: '(71)92551-5678',
      email: 'rafael.gomes@email.com',
      id: 7
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )

      if (index >= 0) {
        state.itens[index] = action.payload
      }
    },
    registrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.some(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase() ||
          contato.telefone === action.payload.telefone ||
          contato.email.toLowerCase() === action.payload.email.toLowerCase()
      )

      if (contatoJaExiste) {
        alert(
          'Um contato com este nome, número ou email já existe em sua lista, edite primerio caso queira alterar'
        )
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const novoContato = {
          ...action.payload,

          id: ultimoContato ? ultimoContato.id + 1 : 1
        }

        state.itens.push(novoContato)
      }
    }
  }
})

export const { remover, editar, registrar } = contatosSlice.actions

export default contatosSlice.reducer
