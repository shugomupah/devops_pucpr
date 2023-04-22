import Login from './pages/Login'
import Signup from './pages/Signup'
import Users from './pages/Users'
import { Outlet, Link, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import { useState } from 'react'
import firebase from './clients/firebase'
import Title from './components/Title'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [user, setUser] = useState(null)

  const onSave = async () => {
    try {
    console.log({name, lastName})
    const resultado = await firebase.auth().createUserWithEmailAndPassword(email, password)
    console.log(resultado.user.uid)
    await firebase.firestore().collection('user').doc(resultado.user.uid).set({name, lastName})
    } catch (error) {
      console.log(error)
    }
  }

  const onLogin = async () => {
    try {
    console.log({email, password})
    const user = await firebase.auth().signInWithEmailAndPassword(email, password)
    console.log('user ', user)
    //use react dom to navigate
    setUser(user)
      return true;
  } catch (error) {
      console.log(error)
    }
  }


  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
           <div style={{display: 'flex', width: 250, justifyContent: 'space-between'}}>
            <Link to="/cadastro">Signup</Link>
            <Link to="/principal">Users</Link>
            <Link to="/">Login</Link>
          </div>
          <Outlet />
        </div>
       
      ),
      children: [
        {
          path: "",
          element:  <Login onLogin={onLogin} setEmail={setEmail} setPassword={setPassword}/>,
        },
        {
          path: "principal",
          element: user ? <Users /> : <div> <Title title=" Logue para ver a página principal. "/> <Login onLogin={onLogin} setEmail={setEmail} setPassword={setPassword}/> </div>,
        },
        {
          path: "cadastro",
          element:<Signup setEmail={setEmail} setPassword={setPassword}  onSave={onSave} setName={setName} setLastName={setLastName}/>,
        },
      ]
    },
  ]);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
