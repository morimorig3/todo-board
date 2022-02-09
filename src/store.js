import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from 'components/totoapp/todoReducer';

export const store = configureStore({
  reducer: {
    todoBoards: todoReducer,
  },
});
