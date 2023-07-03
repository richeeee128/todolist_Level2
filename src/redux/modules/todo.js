const ADDTODO = 'ADD_TODO';
const DELETETODO = 'DELETE_TODO';
const TOGGLESTATETODO = 'TOGGLE_STATE_TODO';
const GETTODOBYID = 'GET_TODO_BY_ID';

//Action creator
export const addTodo = (payload) => {
  return {
    type: ADDTODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETETODO,
    payload,
  };
};
export const toggleStateTodo = (payload) => {
  return {
    type: TOGGLESTATETODO,
    payload,
  };
};
export const getTodoById = (payload) => {
  return {
    type: GETTODOBYID,
    payload,
  };
};

// Reducer
const createTodo = (state, action) => {
  switch (action.type) {
    // Todo를 만들어주는 Reducer
    case ADDTODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    default:
      return state;
  }
};

// const titleChangeHandler = (event) => {
//     setTitle(event.target.value);
//   };

//   const textChangeHandler = (event) => {
//     setText(event.target.value);
//   };

//  const clickedAddTodo = () => {
//   const newId = id + 1;
//   setId(newId);
//   const newTodo = {
//     id: newId,
//     title,
//     text,
//     isDone: false,
//   };
//   setTodo([...todo, newTodo]);
//   setTitle('');
//   setText('');
// };

//  const removeBtn = (id) => {
//     const newTodo = todo.filter((todo) => todo.id !== id);
//     setTodo(newTodo);
//   };

//   const toggleState = (id) => {
//     const updateTodo = todo.map((item) => {
//       if (item.id === id) {
//         return { ...item, isDone: !item.isDone };
//       }
//       return item;
//     });
//     setTodo(updateTodo);
//   };

// function reducer(item, action) {
//   switch (action.type) {
//     case 'AddTodo':
//       return {
//         [...item, ]
//   };
//     case 'DeleteTodo' :
//       return {

//       }
//     default:
//       return item;
//   }
// }
