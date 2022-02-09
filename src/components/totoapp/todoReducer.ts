import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoData, Task, Board } from 'types';

const initialState = JSON.parse(
  window.localStorage.getItem('todo') || '[]',
) as TodoData;

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addBoard: (state, action: PayloadAction<Board>) => {
      const newBoard = action.payload;
      state.push(newBoard);
    },
    deleteBoard: (state, action: PayloadAction<string>) => {
      const boardId = action.payload;
      const deleteTargetIndex = state.findIndex(
        (board) => board.id === boardId,
      );
      state.splice(deleteTargetIndex, 1);
    },
    addTask: (
      state,
      action: PayloadAction<{ boardId: string; newTask: Task }>,
    ) => {
      const { boardId, newTask } = action.payload;
      const boardIndex = state.findIndex((board) => board.id === boardId);
      state[boardIndex].todo.push(newTask);
    },
    deleteTask: (
      state,
      action: PayloadAction<{ boardId: string; taskId: string }>,
    ) => {
      const { boardId, taskId } = action.payload;
      const boardIndex = state.findIndex((board) => board.id === boardId);
      const taskIndex = state[boardIndex].todo.findIndex(
        (task) => task.id === taskId,
      );
      state[boardIndex].todo.splice(taskIndex, 1);
    },
    toggleComplete: (
      state,
      action: PayloadAction<{ boardId: string; taskId: string }>,
    ) => {
      const { boardId, taskId } = action.payload;
      const boardIndex = state.findIndex((board) => board.id === boardId);
      // eslint-disable-next-line no-param-reassign
      state[boardIndex].todo = state[boardIndex].todo.map((task) => {
        if (task.id === taskId) {
          const newTask = task;
          newTask.isCompleted = !newTask.isCompleted;
        }

        return task;
      });
    },
    resetAllBoard: () => [],
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
