import React from 'react';
import styled from 'styled-components';

const SubmitButton = styled.button`
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: #0056b3;
    }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  innerClassName?: string;
}

const Button: React.FC<ButtonProps> = ({ innerClassName, ...rest }) => {
  return <SubmitButton className={innerClassName} {...rest} />;
};

export default Button;