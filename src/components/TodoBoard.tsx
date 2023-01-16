import React from 'react';
import '../App.css';
import TodoItem from './TodoItem';

interface TodoBoardProps {
  todoList: string[];
  key: number;
  item: string;
  onDelete: (i: any) => void;
}

const TodoBoard: React.FC<TodoBoardProps> = ({ todoList, onDelete }) => {
  return (
    <>
      <div className="w-full h-full overflow-auto">
        {todoList.map((item: string, key: number) => (
          <TodoItem item={item} key={key} onDelete={onDelete} />
        ))}
      </div>
    </>
  );
};

export default TodoBoard;
