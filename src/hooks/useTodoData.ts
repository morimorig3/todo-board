import { useState, useEffect } from 'react';
import { Task, Board } from 'types';

const inititalState = JSON.parse(window.localStorage.getItem('todo') || '[]');

const useTodoData = () => {
  const [todoData, setTodoData] = useState(inititalState);

  const resetTodoData = () => setTodoData([]);

  const addBoard = (newBoard: Board) => {
    const newTodoData = [...todoData, newBoard];
    setTodoData(newTodoData);
  };

  const deleteBoard = (id: string) => {
    const newTodoData = [...todoData];
    const targetBoardIndex = todoData.findIndex(
      (board: Board) => board.id === id
    );
    newTodoData.splice(targetBoardIndex, 1);
    setTodoData(newTodoData);
  };

  const addTask = (id: string, newTask: Task) => {
    const newTodoData = [...todoData];
    const board = todoData.find((board: Board) => board.id === id);
    if (!board) return;
    board.todo = [...board.todo, newTask];

    const index = todoData.findIndex((board: Board) => board.id === id);
    newTodoData.splice(index, 1, board);
    setTodoData(newTodoData);
  };

  const deleteTask = (boardId: string, taskId: string) => {
    const newTodoData = [...todoData];
    const board = todoData.find((board: Board) => board.id === boardId);
    const index = todoData.findIndex((board: Board) => board.id === boardId);
    board.todo = board.todo.filter((task: Task) => task.id !== taskId);
    newTodoData.splice(index, 1, board);
    setTodoData(newTodoData);
  };

  const toggleTask = (boardId: string, taskId: string) => {
    const newTodoData = [...todoData];
    const board = todoData.find((board: Board) => board.id === boardId);
    const index = todoData.findIndex((board: Board) => board.id === boardId);
    board.todo = board.todo.map((task: Task) => {
      if (task.id === taskId) task.isCompleted = !task.isCompleted;
      return task;
    });
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
    toggleTask,
  };
};

export default useTodoData;
