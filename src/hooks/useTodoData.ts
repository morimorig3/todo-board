import { useState, useEffect } from 'react';

type task = {
  title: string;
  id: string;
  isCompleted: boolean;
};

type board = {
  title: string;
  id: string;
  todo: task[];
};

const inititalState = JSON.parse(window.localStorage.getItem('todo') || '[]');

const useTodoData = () => {
  const [todoData, setTodoData] = useState(inititalState);

  const resetTodoData = () => setTodoData([]);

  const addBoard = (newBoard: board) => {
    const newTodoData = [...todoData, newBoard];
    setTodoData(newTodoData);
  };

  const deleteBoard = (id: string) => {
    const newTodoData = [...todoData];
    const targetBoardIndex = todoData.findIndex(
      (board: board) => board.id === id
    );
    newTodoData.splice(targetBoardIndex, 1);
    setTodoData(newTodoData);
  };

  const addTask = (id: string, newTask: task) => {
    const newTodoData = [...todoData];
    const board = todoData.find((board: board) => board.id === id);
    if (!board) return;
    board.todo = [...board.todo, newTask];

    const index = todoData.findIndex((board: board) => board.id === id);
    newTodoData.splice(index, 1, board);
    setTodoData(newTodoData);
  };

  const deleteTask = (boardId: string, taskId: string) => {
    const newTodoData = [...todoData];
    const board = todoData.find((board: board) => board.id === boardId);
    const index = todoData.findIndex((board: board) => board.id === boardId);
    board.todo = board.todo.filter((task: task) => task.id !== taskId);
    newTodoData.splice(index, 1, board);
    setTodoData(newTodoData);
  };

  useEffect(
    () => window.localStorage.setItem('todo', JSON.stringify(todoData)),
    [todoData]
  );

  return {
    todoData,
    resetTodoData,
    addBoard,
    deleteBoard,
    addTask,
    deleteTask,
  };
};

export default useTodoData;
