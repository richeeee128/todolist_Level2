import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleStatusTodo } from '../redux/modules/todos';
import { Link } from 'react-router-dom';

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };
  return (
    <ListContainer>
      <h2>Working.. 🔥</h2>
      <ListWrapper>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <TodoContainer key={todo.id}>
                <TodoDetailLink to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </TodoDetailLink>
                <div>
                  <h2 className='todo-title'>{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <ButtonBox>
                  <ToggleButton
                    bordercolor='red'
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제하기
                  </ToggleButton>
                  <ToggleButton
                    bordercolor='blue'
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? '취소' : '완료'}
                  </ToggleButton>
                </ButtonBox>
              </TodoContainer>
            );
          } else {
            return null;
          }
        })}
      </ListWrapper>
      <h2>Done..! 🎉</h2>
      <ListWrapper>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <TodoContainer key={todo.id}>
                <TodoDetailLink to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </TodoDetailLink>
                <div>
                  <h2>{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <ButtonBox>
                  <ToggleButton
                    bordercolor='red'
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제하기
                  </ToggleButton>
                  <ToggleButton
                    bordercolor='blue'
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? '취소' : '완료'}
                  </ToggleButton>
                </ButtonBox>
              </TodoContainer>
            );
          } else {
            return null;
          }
        })}
      </ListWrapper>
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.div`
  padding: 0 24px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 70px;
`;

const TodoContainer = styled.div`
  width: 270px;
  border: 2px solid #a0c49d;
  min-height: 100px;
  border-radius: 12px;
  padding: 25px;
  overflow: hidden;
`;

const TodoDetailLink = styled(Link)`
  text-decoration: none;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 25px;
  gap: 15px;
`;

const ToggleButton = styled.button`
  border: 1px solid ${({ bordercolor }) => bordercolor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
