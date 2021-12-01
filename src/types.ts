export type Task = {
  title: string;
  id: string;
  isCompleted: boolean;
};

export type Board = {
  title: string;
  id: string;
  todo: Task[];
};

export type TodoData = Board[];
