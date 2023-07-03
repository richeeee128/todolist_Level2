import React from 'react';
import { styled } from 'styled-components';

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

function Header() {
  return (
    <Title>
      <p>My Todo List</p>
      <p>React</p>
    </Title>
  );
}

export default Header;
