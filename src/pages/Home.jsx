import React from 'react';
import Header from './component/Header';
import InputBox from './component/InputBox';
import Working from './component/Working';
import Done from './component/Done';

function Home() {
  return (
    <div>
      <Header />
      <InputBox />
      <Working />
      <Done />
    </div>
  );
}

export default Home;
