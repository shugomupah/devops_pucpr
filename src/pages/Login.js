import Input from '../components/Input'
import Button from '../components/Button'
import Title from '../components/Title'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function App({onLogin, setEmail, setPassword}) {
  const navigate = useNavigate()
  useEffect(() => {
    setEmail(null)
    setPassword(null)
  }, [setEmail, setPassword])
  const onLoginWrapper = async () => {
    const result = await onLogin()
    if (result) {
      navigate('/principal')
    }

  }


  return (
    <div className="login">
        <Title title="Login Page"/>
        <Input label="E-mail" placeholder="E-mail" type="text" onchange={setEmail}/>
        <Input label="Password" placeholder="******" type="password" onchange={setPassword}/>
        <Button onclick={onLoginWrapper}>
           Login 
        </Button>
    </div>
  );
}

export default App;
