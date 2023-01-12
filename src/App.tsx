import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import TodoBoard from './components/TodoBoard';

export interface IProp {
  i: number;
  handleDelete(): void;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const App = () => {
  const [todoInput, setTodoInput] = useState<string>('');
  const [todoList, setTodoList] = useState<string[]>([]);

  //input에 어떤 입력값이 들어오거나 무엇인가가 바뀌었을때 알려주는 함수
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  // 추가하는 함수
  const addItem = () => {
    setTodoList([...todoList, todoInput]);
    setTodoInput('');
    //배열안에 있는것을 ...으로 복사해오고, 새롭게 들어오는 input값을 넣어준다
  };

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      //만약 event(즉, 자기자신)의 key 가 Enter 면
      addItem();

      // addItem 배열에 추가하는함수를 실행해라.
    }
  };

  const handleDelete = (i: number, e: React.MouseEvent<HTMLButtonElement>) => {
    const deleteVal = [...todoList];
    deleteVal.slice(i, 1);
    setTodoList(deleteVal);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-green-700 w-96 h-5/6 font-bold ">
        <div className=" border-black border-solid border-b-4">
          <h1 className="text-4xl text-left ml-10 mt-5 text-black-500 mb-3">
            Todo List
          </h1>
        </div>

        <div className="relative h-4/5 flex justify-center left-5">
          <TodoBoard
            todoList={todoList}
            key={0}
            item={''}
            handleDelete={handleDelete}
          />
          <input
            placeholder="입력하세요"
            type="text"
            onChange={onChange}
            value={todoInput}
            className="w-11/12 h-14 pl-5 outline-none border-2 border-black placeholder:text-black absolute inset-x-0 bottom-0 bg-green-700 text-xl"
            onKeyPress={onEnter}
          />
          <button onClick={addItem} className="button" />
        </div>
      </div>
    </div>
  );
};

export default App;
function i(i: number, arg1: number) {
  throw new Error('Function not implemented.');
}
