const TodoList = ({ todoList = [], setTodoList = () => undefined }) => {
  const deleteTask = (index) => {
    const newTask = [...todoList];
    newTask.splice(index, 1);
    setTodoList(newTask);
  };
  return (
    <ul className="grid grid-cols-1 gap-2">
      {todoList.map((todo, index) => (
        <li className="border border-gray-300 p-2 rounded-sm" key={todo.id}>
          {todo.title}
          <button onClick={() => deleteTask(index)}>削除</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
