import React from 'react';
import { styled } from 'styled-components';

import Form from '../component/Form';
import List from '../component/List';
import Title from '../component/Title';

const Home = () => {
  return (
    <Layout>
      <Title />
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
