import { VFC } from 'react';
import { v4 } from 'uuid';
import AddTaskForm from 'components/totoapp/addTaskForm';
import useInputText from 'hooks/useInputText';
import { useAppDispatch } from 'hooks/redux-hooks';
import { addTask } from 'components/totoapp/todoReducer';

type Props = {
  boardId: string;
};

const EnhancedAddTaskForm: VFC<Props> = ({ boardId }) => {
  const dispatch = useAppDispatch();
  const { value, clearValue, onChange } = useInputText();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask = {
      title: value,
      id: v4(),
      isCompleted: false,
    };
    const payload = {
      newTask,
      boardId,
    };
    dispatch(addTask(payload));
    clearValue();
  };

  return <AddTaskForm value={value} onSubmit={onSubmit} onChange={onChange} />;
};

export default EnhancedAddTaskForm;
