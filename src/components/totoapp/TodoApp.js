import { useState, useEffect } from 'react';
import TodoBoard from 'components/totoapp/todoBoard';

const APP_NAME = 'TODO_APP';

const TodoApp = () => {
  const styleGithub = {
    color: '#000000',
    fontSize: '30px',
  };
  const initTodo = () => JSON.parse(localStorage.getItem(APP_NAME) || '[]');
  const [todo, setTodo] = useState([initTodo]);
  const [task, setTask] = useState('');
  const [disabled, setdisabled] = useState(true);

  // useEffect(() => {
  //   writeLocalStrage();
  // });
  // const writeLocalStrage = () => {
  //   localStorage.setItem(APP_NAME, JSON.stringify(todo));
  // };

  const enterTask = (e) => {
    if (e.target.value) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
    setTask(e.target.value);
  };
  const addTask = (e) => {
    e.preventDefault();
    if (task === '') return;
    setTodo((todo) => [...todo, { task: task, isCompleted: false }]);
    setTask('');
    setdisabled(true);
  };
  return (
    <div>
      <button className="bg-green-500 hover:bg-green-600 transition-colors font-bold py-2 px-4 rounded text-white">
        ボード追加
      </button>
      <div className="py-4">
        <TodoBoard />
      </div>
    </div>
  );
};

export default TodoApp;
