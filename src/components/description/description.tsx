import React, { useState } from 'react';
import { DESCRIPTION_LENGTH } from '../../constants/constants';
import styled from 'styled-components';

interface DescriptionProps {
  text: string;
  maxLength?: number;
}

const ShowButton = styled.button`
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
`;

const Description: React.FC<DescriptionProps> = ({ text, maxLength = DESCRIPTION_LENGTH }) => {
  const [showFullText, setShowFullText] = useState(false);
  const textLength = text.length;
  const truncatedText = textLength > maxLength ? text.slice(0, maxLength) + '...' : text;
  const buttonText = showFullText ? 'Hide Details' : 'Show Details';

  return (
    <div>
      <p>
        {showFullText ? text : truncatedText}
      </p>
      {textLength > maxLength && (
        <ShowButton onClick={() => setShowFullText(!showFullText)}>{buttonText}</ShowButton>
      )}
    </div>
  );
};

export default Description;