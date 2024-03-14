import { Todo } from '@/app/types';
import Link from 'next/link';
import React from 'react';

const TodosSsr = async () => {
  const response = await fetch(`http://localhost:3001/todos`, {
    cache: 'no-cache',
  });
  const todos = await response.json();
  return (
    <div className="max-w-[1200px] min-w-[800px] mx-auto pt-[60px] mb-[50px]">
      <div className="flex border-b-[1px] border-gray-500 flex justify-between pb-[10px]">
        <div className="text-[#444444] text-[30px] font-bold">
          등록된 Todo 모아보기
        </div>
        <div className="border-[3px] rounded-[12px] p-[10px]">
          <Link href="/report">할 일 통계 보러가기!</Link>
        </div>
      </div>
      <div className="grid grid-cols-5 mt-[50px]">
        {todos.map((todo: Todo) => (
          <div
            className="m-[10px] bg-[#ffdde9] p-[15px] w-[200px] h-[220px] flex justify-between flex flex-col shadow-xl whitespace-normal"
            key={todo.id}
          >
            <div>
              <h2 className="font-bold pb-[10px]">{todo.title}</h2>
              <p className="whitespace-normal">{todo.contents}</p>
            </div>
            {todo.isDone ? (
              <p className="font-bold">완료됨✅</p>
            ) : (
              <p className="font-bold">진행 중💦</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodosSsr;
