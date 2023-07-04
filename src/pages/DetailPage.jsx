import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getTodoByID } from '../redux/modules/todos.js';

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodoByID(id));
  }, [dispatch, id]);

  return (
    <Container>
      <Dialog>
        <DialogHeader>
          <div>ID : {todo.id}</div>
          <Button
            bordercolor='#A0C49D'
            onClick={() => {
              navigate('/');
            }}
          >
            이전으로
          </Button>
        </DialogHeader>
        <DetailTitle>{todo.title}</DetailTitle>
        <DetailBody>{todo.body}</DetailBody>
      </Dialog>
    </Container>
  );
};
export default Detail;

const Container = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dialog = styled.div`
  width: 500px;
  height: 300px;
  border: 1px solid #a0c49d;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

const DialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 25px;
  align-items: center;
`;

const DetailTitle = styled.h1`
  padding: 0 25px;
`;

const DetailBody = styled.main`
  padding: 25px;
`;

const Button = styled.button`
  border: 2px solid ${({ bordercolor }) => bordercolor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #a0c49d;
  }
`;
