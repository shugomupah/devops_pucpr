import Title from '../components/Title'
import firebase from '../clients/firebase'
import { useEffect, useState } from 'react'

function App() {
  //function to get users from firestore
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)


  const getUsers = async () => {

    const users = []
    const querySnapshot = await firebase.firestore().collection('user').get()
    querySnapshot.forEach((doc) => {
      users.push(doc.data())
    })
    console.log(users);

    setUsers(users)
    setLoading(true)
  }
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <div className="login">
      <Title title="Listagem de Usuários"/>
      {!loading && <div>Carregando...</div>}
      {users.map((user) => {
        return (
          <div key={`user + ${user.name}`}>
            <div>Nome: {user.name}</div>
            <div>Sobrenome: {user.lastName}</div>
            <br/>
          </div>
      )})}
    </div>
  );
}

export default App;
