import { useState, useEffect } from 'react';
import { Task, Board, TodoData } from 'types';

const inititalState = JSON.parse(
  window.localStorage.getItem('todo') || '[]',
) as TodoData;

const useTodoData = () => {
  const [todoData, setTodoData] = useState<TodoData>(inititalState);

  const resetTodoData = () => setTodoData([]);

  const addBoard = (newBoard: Board) => {
    const newTodoData = [...todoData, newBoard];
    setTodoData(newTodoData);
  };

  const deleteBoard = (id: string) => {
    const newTodoData = [...todoData];
    const targetBoardIndex = todoData.findIndex(
      (board: Board) => board.id === id,
    );
    newTodoData.splice(targetBoardIndex, 1);
    setTodoData(newTodoData);
  };

  const addTask = (id: string, newTask: Task) => {
    const newTodoData = [...todoData];
    const newBoard = todoData.find((board: Board) => board.id === id);
    if (!newBoard) return;
    newBoard.todo = [...newBoard.todo, newTask];

    const index = todoData.findIndex((board: Board) => board.id === id);
    newTodoData.splice(index, 1, newBoard);
    setTodoData(newTodoData);
  };

  const deleteTask = (boardId: string, taskId: string) => {
    const newTodoData = [...todoData];
    const newBoard = todoData.find((board: Board) => board.id === boardId);
    if (!newBoard) return;
    const index = todoData.findIndex((board: Board) => board.id === boardId);
    newBoard.todo = newBoard.todo.filter((task: Task) => task.id !== taskId);
    newTodoData.splice(index, 1, newBoard);
    setTodoData(newTodoData);
  };

  const toggleTask = (boardId: string, taskId: string) => {
    const newTodoData = [...todoData];
    const newBoard = todoData.find((board: Board) => board.id === boardId);
    if (!newBoard) return;
    const index = todoData.findIndex((board: Board) => board.id === boardId);
    newBoard.todo = newBoard.todo.map((task: Task) => {
      if (task.id === taskId) {
        const newTask = task;
        newTask.isCompleted = !newTask.isCompleted;

        return newTask;
      }

      return task;
    });
    newTodoData.splice(index, 1, newBoard);
    setTodoData(newTodoData);
  };

  useEffect(
    () => window.localStorage.setItem('todo', JSON.stringify(todoData)),
    [todoData],
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
