import React from 'react';
import { styled } from 'styled-components';

import Form from '../component/Form';
import List from '../component/List';

const Home = () => {
  return (
    <Layout>
      <Title>
        <p>My Todo List</p>
        <p>React</p>
      </Title>
      <Form />
      <List />
    </Layout>
  );
};

export default Home;

const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
