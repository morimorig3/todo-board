import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(window.localStorage.getItem('todo') || '[]');

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addBoard: (state, action) => {
      const newTask = action.payload;
      state.push(newTask);
    },
    deleteBoard: (state, action) => {
      const boardId = action.payload;
      const deleteTargetIndex = state.findIndex(
        (board) => board.id === boardId,
      );
      state.splice(deleteTargetIndex, 1);
    },
    addTask: (state, action) => {
      const { boardId, newTask } = action.payload;
      const boardIndex = state.findIndex((board) => board.id === boardId);
      state[boardIndex].todo.push(newTask);
    },
    deleteTask: (state, action) => {
      const { boardId, taskId } = action.payload;
      const boardIndex = state.findIndex((board) => board.id === boardId);
      state[boardIndex].todo = state[boardIndex].todo.filter(
        (task) => task.id !== taskId,
      );
    },
    toggleComplete: (state, action) => {
      const { boardId, taskId } = action.payload;
      const boardIndex = state.findIndex((board) => board.id === boardId);
      state[boardIndex].todo = state[boardIndex].todo.map((task) => {
        if (task.id === taskId) {
          const newTask = task;
          newTask.isCompleted = !newTask.isCompleted;
        }
        return task;
      });
    },
    resetAllBoard: (state) => {
      return [];
    },
  },
});

export const {
  addBoard,
  deleteBoard,
  addTask,
  deleteTask,
  toggleComplete,
  resetAllBoard,
} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
