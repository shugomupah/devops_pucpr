
import Input from '../components/Input'
import Button from '../components/Button'
import Title from '../components/Title'

function Signup({onSave, setEmail, setPassword, setName, setLastName}) {

  return (
    <div className="login">
        <Title title="Tela de cadadastro"/>
        <Input label="Email" placeholder="Email" type="text" onchange={setEmail}/>
        <Input label="password" placeholder="******" type="password" onchange={setPassword}/>
        <Input label="Nome" placeholder="Nome" type="text" onchange={setName}/>
        <Input label="Sobrenome" placeholder="sobrenome" type="text" onchange={setLastName}/>
        <Button onclick={onSave}>
           Login 
        </Button>
    </div>
  );
}

export default Signup;
