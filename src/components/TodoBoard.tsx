import React from 'react';
import '../App.css';
import TodoItem from './TodoItem';

interface TodoBoardProps {
  todoList: string[];
  key: number;
  item: string;
  handleDelete: (i: number, e: any) => void;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const TodoBoard: React.FC<TodoBoardProps> = ({ todoList, handleDelete }) => {
  return (
    <>
      <div className="w-full h-full overflow-auto">
        {todoList.map((item: string, key: number) => (
          <TodoItem item={item} key={key} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export default TodoBoard;
