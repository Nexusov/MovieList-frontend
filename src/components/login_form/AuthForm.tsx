import { useState } from 'react';
import { useAuthStore } from '../../store/store';
import axios from 'axios';
import Button from '../button/Button';
import Input from '../input/Input';
import s from './AuthForm.module.scss';

type AuthType = 'signin' | 'register';

const AuthForm = () => {
  const [activeForm, setActiveForm] = useState<AuthType>('signin');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const setToken = useAuthStore((state) => state.setToken);

  const clearErrors = () => {
    setEmailError('');
    setNameError('');
    setPasswordError('');
  };

  const register = async () => {
    clearErrors();
    try {
      const response = await axios.post('http://localhost:3000/register', { name, email, password });
      setToken(response.data.token);
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data?.message || 'Registration error';
        if (message.includes('Email')) {
          setEmailError(message);
        } else if (message.includes('Username')) {
          setNameError(message);
        } else if (message.includes('Password')) {
          setPasswordError(message);
        } else {
          setPasswordError(message);
        }
      } else {
        setPasswordError('Registration error');
      }
    }
  };

  const login = async () => {
    clearErrors();
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      setToken(response.data.token);
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        const message = error.response.data?.message || 'Login error';
        if (message.includes('email')) {
          setEmailError(message);
        } else {
          setPasswordError(message);
        }
      } else {
        setPasswordError('Login error');
      }
    }
  };

  return (
    <div className={s.container}>
      <div className={s.buttonsContainer}>
        <Button type='auth-type' isActive={activeForm === 'signin'} onClick={() => setActiveForm('signin')}>Sign in</Button>
        <Button type='auth-type' isActive={activeForm === 'register'} onClick={() => setActiveForm('register')}>Register</Button>
      </div>
      <div className={s.titleContainer}>
        {activeForm === 'signin' ? <h3>Sign In with Your Email</h3> : <h3>Create a New Account</h3>}
      </div>
      <div className={s.inputsContainer}>
        <div className={s.inputWrapper}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail((e.target.value).trim())}
            required
            autoComplete='new-password'
          />
          {emailError && <div className={s.error}>{emailError}</div>}
        </div>
        {activeForm === 'register' && (
          <div className={s.inputWrapper}>
            <Input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName((e.target.value).trim())}
              required
            />
            {nameError && <div className={s.error}>{nameError}</div>}
          </div>
        )}
        <div className={s.inputWrapper}>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <div className={s.error}>{passwordError}</div>}
        </div>
      </div>
      <div className={s.loginButtonContainer}>
        {activeForm === 'signin' ? <Button type='action' onClick={login}>Log in</Button> : <Button type='action' onClick={register}>Register</Button>}
      </div>
    </div>
  );
}

export default AuthForm;
