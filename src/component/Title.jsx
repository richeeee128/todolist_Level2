import React from 'react';
import { styled } from 'styled-components';

const Title = () => {
  return (
    <Header>
      <p>My Todo List</p>
      <p>React</p>
    </Header>
  );
};

export default Title;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
