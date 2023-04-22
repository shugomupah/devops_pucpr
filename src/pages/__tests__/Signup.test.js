import { render, screen, fireEvent } from '@testing-library/react';
import Signup from '../Signup';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));

describe('Signup component', () => {
  it('renders all input fields and a button', () => {
    render(<Signup />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('password')).toBeInTheDocument();
    expect(screen.getByText('Nome')).toBeInTheDocument();
    expect(screen.getByText('Sobrenome')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onSave function when button is clicked', () => {
    const onSave = jest.fn();
    render(<Signup onSave={onSave} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onSave).toHaveBeenCalled();
  });

});
