import { useState } from 'react';
import { useAuthStore } from '../../store/store';
import axios from 'axios';
import s from './LoginForm.module.scss';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setToken = useAuthStore((state) => state.setToken);

  const register = async () => {
    try {
      const response = await axios.post('http://localhost:3000/register', { email, password });
      setToken(response.data.token);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      setToken(response.data.token);
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  
  return (
    <div className={s.wrapper}>
      <h2>Register/Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default LoginForm