
import Input from '../components/Input'
import Button from '../components/Button'
import Title from '../components/Title'

function Signup({onSave, setName, setLastName}) {

  return (
    <div className="login">
        <Title title="Tela de cadadastro"/>
        <Input label="Nome" placeholder="Nome" type="text" onchange={setName}/>
        <Input label="Sobrenome" placeholder="******" type="Sobrenome" onchange={setLastName}/>
        <Button onclick={onSave}>
           Login 
        </Button>
    </div>
  );
}

export default Signup;
