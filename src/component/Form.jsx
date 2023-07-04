import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import nextId from 'react-id-generator';
import { addTodo } from '../redux/modules/todos';

const Form = () => {
  const id = nextId();

  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: 0,
    title: '',
    body: '',
    isDone: false,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandeler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === '' || todo.body.trim() === '') return;

    dispatch(addTodo({ ...todo, id }));
    setTodo({
      id: 0,
      title: '',
      body: '',
      isDone: false,
    });
  };

  return (
    <InputBox onSubmit={onSubmitHandeler}>
      <InputForm>
        <FormLabel>제목</FormLabel>
        <FormInput
          type='text'
          name='title'
          value={todo.title}
          onChange={onChangeHandler}
        />
      </InputForm>
      <InputForm>
        <FormLabel>내용</FormLabel>
        <FormInput
          type='text'
          name='body'
          value={todo.body}
          onChange={onChangeHandler}
        />
      </InputForm>
      <SubmitButton type='submit'>추가하기</SubmitButton>
    </InputBox>
  );
};

export default Form;

const InputBox = styled.form`
  height: 80px;
  background-color: #a3ffd9;
  padding: 15px;
  display: flex;
  align-items: center;
`;

const InputForm = styled.div`
  padding: 15px;
`;

const FormLabel = styled.label`
  padding: 20px;
  font-weight: bold;
  font-size: 20px;
`;

const FormInput = styled.input`
  width: 200px;
  height: 35px;
  border-radius: 10px;
  padding-left: 10px;
  border: none;
`;

const SubmitButton = styled.button`
  height: 37px;
  width: 100px;
  border-radius: 10px;
  margin-left: 35px;
  border: none;
  background-color: #fff;
  font-weight: bold;
  &:hover {
    background-color: #32e1b8;
  }
`;
