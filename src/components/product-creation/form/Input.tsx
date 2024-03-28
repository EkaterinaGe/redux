import React, { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  innerClassName?: string;
  defaultValue?: string;
}

const Input: React.FC<InputProps> = ({ value, innerClassName, defaultValue, type, ...rest }) => {
  const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.target.value);
  };

  return <input value={innerValue} onChange={handleChange} className={innerClassName} type={type} {...rest} />;
};

export default Input;