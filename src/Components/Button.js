// src/Components/Button.js
import styled from 'styled-components';

export const Button = styled.button`
  width: 200px;
  height: 70px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: darkblue;
  }
`;
