import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

function InputBox() {
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const clickedAddTodo = () => {
    const newId = id + 1;
    setId(newId);
    const newTodo = {
      id: newId,
      title,
      text,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
    setTitle('');
    setText('');
  };

  return (
    <>
      <div className='inputbox'>
        <div className='input'>
          제목 <input value={title} onChange={titleChangeHandler} />
        </div>
        <div className='input'>
          내용 <input value={text} onChange={textChangeHandler} />
        </div>
        <button className='creatBtn' onClick={clickedAddTodo}>
          추가하기
        </button>
      </div>
    </>
  );
}

export default InputBox;
