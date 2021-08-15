import TodoBoard from 'components/totoapp/todoBoard';

const TodoApp = () => {
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
