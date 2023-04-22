import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import firebase from '../../clients/firebase'
import App from '../Users'

jest.mock('../../clients/firebase')

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));

describe('App', () => {
  it('should render a list of users', async () => {
    const mockUser = {
      name: 'Victor',
      lastName: 'Sabino'
    }
    const mockCollection = {
      get: jest.fn(() => Promise.resolve({ 
        forEach: (callback) => callback({ data: () => mockUser })
      }))
    }
    firebase.firestore.mockReturnValue({
      collection: jest.fn(() => mockCollection)
    })

    render(<App />)

    expect(screen.getByText('Listagem de Usuários')).toBeInTheDocument()

    // Use findBy queries to wait for specific elements to appear
    const name = await screen.findByText(`Nome: ${mockUser.name}`)
    const lastName = await screen.findByText(`Sobrenome: ${mockUser.lastName}`)

    // Make separate assertions
    expect(name).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
  })

  it('should render a loading message when users are being fetched', async () => {
    firebase.firestore.mockReturnValue({
      collection: jest.fn(() => ({ get: () => Promise.resolve() }))
    })

    render(<App />)

    expect(screen.getByText('Listagem de Usuários')).toBeInTheDocument()
    expect(screen.getByText('Carregando...')).toBeInTheDocument()

  })
})
