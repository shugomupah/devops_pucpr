import Login from './pages/Login'
import './App.css';
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const onLogin = () => {
    console.log({email, password})
    if (email === 'eduardo.lino@pucpr.br' && password === '123456')
      setUser({email, password})
  }

  return (
    <div className="App">
      {!user ? <Login onLogin={onLogin} setEmail={setEmail} setPassword={setPassword}/> : 'Acessado com sucesso!'}
    </div>
  );
}

export default App;
