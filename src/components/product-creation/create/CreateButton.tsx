import React from 'react';
import styled from 'styled-components';

const CircleButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #007bff;
    color: white;
    font-size: 24px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #0056b3;
    }
`;

interface CreateButtonProps {
    onClick: () => void;
}
  
const CreateButton: React.FC<CreateButtonProps> = ({ onClick }) => {
    return <CircleButton onClick={onClick}>+</CircleButton>;
};
  
export default CreateButton;