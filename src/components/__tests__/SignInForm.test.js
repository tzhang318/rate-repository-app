import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import SignInForm from '../SignInForm';

describe('SignInContainer', () => {
  it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
    const onSubmit = jest.fn();
    
    render(<SignInForm onSubmit={onSubmit} />);

    fireEvent.changeText(screen.getByPlaceholderText('username'), 'kalle');
    fireEvent.changeText(screen.getByPlaceholderText('password'), 'password');

    fireEvent.press(screen.getByText('Sign in'));

    await waitFor(() => {
      // expect the onSubmit function to have been called once and with a correct first argument
      expect(onSubmit).toHaveBeenCalledTimes(1);
      // onSubmit.mock.calls[0][0] contains the first argument of the first call
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'kalle',
        password: 'password',
      });
    });
  });
});