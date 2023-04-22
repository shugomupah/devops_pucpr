import { render, screen, fireEvent } from '@testing-library/react';
import App from '../Login';

if (typeof window !== 'undefined') {
    global.window = window;
  }
  
  if (typeof global !== 'undefined') {
    global.global = global;
  }
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));

describe('App component', () => {
    
  it('renders all input fields and a button', () => {
    render(<App setEmail={() => {}} setPassword={(() => {})}/>);
    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onLogin function when button is clicked', async () => {
    const onLogin = jest.fn().mockResolvedValue(true);
    const setEmail = jest.fn();
    const setPassword = jest.fn();
    render(<App onLogin={onLogin} setEmail={setEmail} setPassword={setPassword} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onLogin).toHaveBeenCalled();
    expect(setEmail).toHaveBeenCalledWith(null);
    expect(setPassword).toHaveBeenCalledWith(null);
    await screen.findByText('Login Page'); // espera pela renderização do componente
    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });

  it('does not redirect when onLogin function returns false', async () => {
    const onLogin = jest.fn().mockResolvedValue(false);
    const navigate = jest.fn();
    const setEmail = jest.fn();
    const setPassword = jest.fn();
    render(<App onLogin={onLogin} setEmail={setEmail} setPassword={setPassword} navigate={navigate} />);
    fireEvent.click(screen.getByRole('button'));
    await screen.findByText('Login Page'); // espera pela renderização do componente
    expect(navigate).not.toHaveBeenCalled();
  });
});
