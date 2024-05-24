import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import s from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /* onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; */
  type: HTMLInputTypeAttribute
  placeholder: string
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, ...props }) => {
  return (
    <input
      className={s.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
