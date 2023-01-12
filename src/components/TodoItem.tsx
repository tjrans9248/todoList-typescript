import React from 'react';

interface TodoItemProp {
  item: string;
  handleDelete: (i: number, e: any) => void;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const TodoItem: React.FC<TodoItemProp> = ({ item, handleDelete, onClick }) => {
  return (
    <>
      <div className="w-11/12 pl-5 pt-3 h-14 mt-3 border-2 text-xl border-black flex justify-between">
        {item}
        <button
          onClick={handleDelete}
          className="border-black border-2 mr-3 mb-2 h-auto"
        >
          X
        </button>
      </div>
    </>
  );
};

export default TodoItem;
