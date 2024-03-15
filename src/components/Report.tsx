'use client';

import { Todo } from '@/app/types';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Report = () => {
  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await fetch(`http://localhost:4000/todos`, {
        next: {
          revalidate: 10,
        },
      });
      const todos = await response.json();
      return todos;
    },
  });

  if (!todos) {
    return <div>데이터가 없습니다.</div>;
  }

  const todoalTodos = todos.length;
  const DoneTodos = todos.filter((todo: Todo) => todo.isDone === true).length;
  const WorkingTodos = todos.filter(
    (todo: Todo) => todo.isDone === false
  ).length;

  return (
    <div>
      <p>
        현재까지 <span className="text-green-700 font-bold">{todoalTodos}</span>
        개의 투두리스트가 등록되었습니다.
      </p>
      <p>
        완료된 리스트는{' '}
        <span className="text-blue-600 font-bold">{DoneTodos}</span>개, 할 일
        리스트는{' '}
        <span className="text-yellow-600 font-bold">{WorkingTodos}</span>개
        입니다.
      </p>
    </div>
  );
};

export default Report;
