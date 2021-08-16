import { GrFormClose } from 'react-icons/gr';

const TodoList = ({ id, todo = [], setTodoData = () => undefined }) => {
  const deleteTask = (taskId) => {
    setTodoData((todoData) => {
      const newTodoData = [...todoData];
      const board = todoData.filter((board) => board.id === id)[0];
      const boardIndex = todoData.findIndex((board) => board.id === id);
      board.todo = board.todo.filter((todo) => todo.id !== taskId);
      newTodoData.splice(boardIndex, 1, board);
      return newTodoData;
    });
  };

  return (
    <ul className="grid grid-cols-1 gap-2">
      {todo.map((todo) => (
        <li
          className="flex justify-between items-center border border-gray-300 p-2 rounded-sm"
          key={todo.id}
        >
          {todo.title}
          <button onClick={() => deleteTask(todo.id)}>
            <GrFormClose />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
