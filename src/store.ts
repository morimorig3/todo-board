import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from 'components/totoapp/todoReducer';

const store = configureStore({
  reducer: {
    todoBoards: todoReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
