import Title from '../components/Title'
import { Link } from 'react-router-dom'
function App() {

  return (
    <div className="login">
      <div style={{display: 'flex', width: 250, justifyContent: 'space-between'}}>

      <Link to="/signup">Signup</Link>
      <Link to="/">Users</Link>
      <Link to="/login">Login</Link>
      </div>
      <Title title="Listagem de Usuários"/>

    </div>
  );
}

export default App;
