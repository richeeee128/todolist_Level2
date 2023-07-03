import React from 'react';
import { styled } from 'styled-components';

function List() {
  return (
    <>
      <div className='content'>
        <h3>제목</h3>
        내용
        <br />
        <h4>Working... 💻</h4>
        <div className='Working'></div>
        <h4>Done...! 🏖️</h4>
        <div className='Done'>
          <button className='delete'>삭제</button>
          <button className='done'>완료</button>
        </div>
      </div>
    </>
  );
}

export default List;
