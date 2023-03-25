import Input from '../components/Input'
import Button from '../components/Button'
import Title from '../components/Title'

function App({onLogin, setEmail, setPassword}) {

  return (
    <div className="login">
        <Title/>
        <Input label="E-mail" placeholder="E-mail" type="text" onchange={setEmail}/>
        <Input label="Password" placeholder="******" type="password" onchange={setPassword}/>
        <Button onclick={onLogin}>
           Login 
        </Button>
    </div>
  );
}

export default App;
