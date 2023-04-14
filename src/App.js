import Login from './pages/Login'
import Signup from './pages/Signup'
import Users from './pages/Users'
import './App.css';
import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import firebase from './clients/firebase'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const onSave = () => {
    console.log({name, lastName})
    //create save to firestore firebase name and lastName copilote
    firebase.firestore().collection('usuario').add({name, lastName})
  }
  const onLogin = () => {
    console.log({email, password})
    if (email === 'eduardo.lino@pucpr.br' && password === '123456')
      setUser({email, password})
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Users />,
      index: true
    },
    {
      path: "/login",
      element: !user ? <Login onLogin={onLogin} setEmail={setEmail} setPassword={setPassword}/> : <>Acessado com sucesso!</>,
      index: true
    },
    {
      path: "/signup",
      element: !user ? <Signup onSave={onSave} setName={setName} setLastName={setLastName}/> : <>Acessado com sucesso!</>,
    },
  ]);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
