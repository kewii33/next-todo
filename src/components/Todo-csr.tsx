'use client';

import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Todo, NewTodo } from '../app/types/index';
import { useRouter } from 'next/navigation';

const TodoCsr = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const maxTitleLength = 10;
  const maxContentsLength = 20;

  const router = useRouter();
  const goReportPage = () => {
    router.push('/report');
  };

  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3001/todos');
      const todos = await response.json();
      return todos;
    },
  });

  const newTodoMutation = useMutation({
    mutationFn: async (newTodo: NewTodo) => {
      const response = await fetch(`http://localhost:3001/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });
      return todos;
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: 'DELETE',
      });
      return response.json();
    },
  });

  const patchTodoMutation = useMutation({
    mutationFn: async (params: { id: string; isDone: boolean }) => {
      const response = await fetch(`http://localhost:3001/todos/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isDone: !params.isDone,
        }),
      });
      return todos;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center flex justify-center pt-[60px]">
        <img src="/spinner.svg" alt="loading" />
      </div>
    );
  }

  if (isError) {
    console.error('Error fetching todos:', isError);
    return <div>에러 발생</div>;
  }

  return (
    <div className="max-w-[1200px] min-w-[800px] mx-auto pt-[60px] mb-[50px]">
      <div>
        <div className="flex border-b-[1px] border-gray-500 flex justify-between pb-[10px]">
          <div className="text-[#444] text-[30px] font-bold">
            새로운 Todo추가
          </div>
          <button
            className="border-[3px] rounded-[12px] p-[10px]"
            onClick={goReportPage}
          >
            할 일 통계 보러가기!
          </button>
        </div>
        <div className="flex flex-col flex items-center flex justify-center">
          <form
            className="max-w-[800px] min-w-[600px] h-[230px] mt-[50px] p-[30px] mb-[50px] text-[19px] border rounded-[12px] bg-gray-200 flex justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              if (!title || !contents) {
                alert('제목과 내용을 입력해주세요.');
                return;
              }
              newTodoMutation.mutate(
                { title, contents, isDone: false },
                {
                  onSuccess: () => {
                    setTitle('');
                    setContents('');

                    queryClient.invalidateQueries({
                      queryKey: ['todos'],
                    });
                  },
                }
              );
            }}
          >
            <div className="flex justify-center flex-col">
              <div className="pb-[10px]">
                <label className="pr-[10px]" htmlFor="title">
                  제목
                </label>
                <input
                  className="w-[450px] h-[40px] p-[10px] rounded-[12px]"
                  id="title"
                  type="text"
                  placeholder="최대 10자까지 입력할 수 있습니다."
                  value={title}
                  onChange={(e) => {
                    if (title.length < maxTitleLength) {
                      setTitle(e.target.value);
                    }
                  }}
                ></input>
              </div>
              <div className="pb-[10px]">
                <label className="pr-[10px]" htmlFor="contents">
                  내용
                </label>
                <input
                  className="w-[450px] h-[40px] p-[10px] rounded-[12px]"
                  id="contents"
                  type="text"
                  placeholder="최대 20자까지 입력할 수 있습니다."
                  value={contents}
                  onChange={(e) => {
                    if (contents.length < maxContentsLength) {
                      setContents(e.target.value);
                    }
                  }}
                ></input>
              </div>
              <div className="flex items-center flex justify-center">
                <button
                  className="mt-[25px] w-[400px] h-[40px] hover:bg-[#3a44bd] bg-[#555] hover:text-white text-white font-bold text-[18px] transition-all duration-500 rounded-[12px]"
                  type="submit"
                >
                  추가하기
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <p className="text-[20px] font-bold mb-[10px]">진행 중...🤸‍♀️</p>
        <div className="grid grid-cols-5 mb-[30px]">
          {todos
            .filter((todo: Todo) => !todo.isDone)
            .map((todo: Todo) => (
              <div
                className="m-[10px] bg-[#ffe7b2] p-[15px] w-[200px] h-[220px] flex justify-between flex flex-col shadow-xl"
                key={todo.id}
              >
                <div>
                  <h2 className="font-bold pb-[10px]">{todo.title}</h2>
                  <p>{todo.contents}</p>
                </div>
                <div className="flex flex items-center flex justify-center pb-[10px]">
                  <button
                    className="border-[3px] border-green-700 p-[5px] rounded-[15px] hover:bg-green-700 hover:text-white font-bold transition-all duration-500 mr-[10px] text-[#555]"
                    onClick={() =>
                      patchTodoMutation.mutate(
                        { id: todo.id, isDone: todo.isDone },
                        {
                          onSuccess: () => {
                            queryClient.invalidateQueries({
                              queryKey: ['todos'],
                            });
                          },
                        }
                      )
                    }
                  >
                    완료하기
                  </button>
                  <button
                    className="border-[3px] border-red-800 p-[5px] rounded-[15px] hover:bg-red-800 hover:text-white font-bold transition-all duration-500 text-[#555]"
                    onClick={() => {
                      if (window.confirm('삭제하시겠습니까?')) {
                        deleteTodoMutation.mutate(todo.id, {
                          onSuccess: () => {
                            queryClient.invalidateQueries({
                              queryKey: ['todos'],
                            });
                          },
                        });
                      } else {
                        return;
                      }
                    }}
                  >
                    삭제하기
                  </button>
                </div>
              </div>
            ))}
        </div>
        <p className="text-[20px] font-bold mb-[10px]">완료✨</p>
        <div className="grid grid-cols-5">
          {todos
            .filter((todo: Todo) => todo.isDone)
            .map((todo: Todo) => (
              <div
                className="m-[10px] bg-green-200 p-[15px] w-[200px] h-[220px] flex justify-between flex flex-col shadow-xl"
                key={todo.id}
              >
                <div>
                  <h2 className="font-bold pb-[10px]">{todo.title}</h2>
                  <p className="whitespace-normal">{todo.contents}</p>
                </div>
                <div className="flex flex items-center flex justify-center pb-[10px]">
                  <button
                    className="border-[3px] border-yellow-600 p-[5px] rounded-[15px] hover:bg-yellow-600 hover:text-white font-bold transition-all duration-500 mr-[10px] text-[#555]"
                    onClick={() =>
                      patchTodoMutation.mutate(
                        { id: todo.id, isDone: todo.isDone },
                        {
                          onSuccess: () => {
                            queryClient.invalidateQueries({
                              queryKey: ['todos'],
                            });
                          },
                        }
                      )
                    }
                  >
                    취소하기
                  </button>
                  <button
                    className="border-[3px] border-red-800 p-[5px] rounded-[15px] hover:bg-red-800 hover:text-white font-bold transition-all duration-500 text-[#555]"
                    onClick={() => {
                      if (window.confirm('삭제하시겠습니까?')) {
                        deleteTodoMutation.mutate(todo.id, {
                          onSuccess: () => {
                            queryClient.invalidateQueries({
                              queryKey: ['todos'],
                            });
                          },
                        });
                      } else {
                        return;
                      }
                    }}
                  >
                    삭제하기
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoCsr;
