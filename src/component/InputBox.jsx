import React, { useReducer } from 'react';
import { styled } from 'styled-components';

const Input = styled.div`
  max-width: 1200px;
  height: 100px;
  background: #daffd1;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Box = styled.p`
  padding: 15px;
`;

const InputBtn = styled.button`
  width: 100px;
  height: 30px;
`;

function reducer(state, action) {
  switch (action.type) {
    case 'AddTodo':
      return [...state, { title: action.title }, { text: action.title }];
    default:
      return state;
  }
}

function InputBox() {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <Input>
      <Box>
        제목 <input type='text' />
      </Box>
      <Box>
        내용 <input type='text' />
      </Box>
      <InputBtn onClick={() => dispatch({ type: 'AddTodo' })}>
        추가하기
      </InputBtn>
    </Input>
  );
}

export default InputBox;
