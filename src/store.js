import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from 'components/totoapp/todoReducer';

const store = configureStore({
  reducer: {
    todoBoards: todoReducer,
  },
});

export default store;
