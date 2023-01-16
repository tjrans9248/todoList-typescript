import React from 'react';

interface TodoItemProp {
  key?: number;
  item: string;
  onDelete: (i: any) => void;
}
const TodoItem = ({ item, onDelete }: TodoItemProp) => {
  return (
    <>
      <div className="w-11/12 pl-5 pt-3 h-14 mt-3 border-2 text-xl border-black flex justify-between">
        {item}
        <button
          onClick={() => onDelete(i)}
          className="border-black border-2 mr-3 mb-2 h-auto"
        >
          X
        </button>
      </div>
    </>
  );
};

export default TodoItem;
function i(i: any): void {
  throw new Error('Function not implemented.');
}
