export async function GET(request: Request) {
  const response = await fetch('http://localhost:3001/todos');
  const todos = await response.json();

  if (!todos) {
    return new Response('투두가 없습니다.', {
      status: 404,
    });
  }
  return new Response(
    JSON.stringify({
      todos,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

export async function POST(request: Request) {
  const { title, contents } = await request.json();
  const response = await fetch('http://localhost:3001/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, contents, isDone: false }),
  });
  const todo = await response.json();

  return Response.json({
    todo,
  });
}

export async function DELETE(request: Request) {
  const response = await fetch(`http://localhost:3001/todos`, {
    method: 'DELETE',
  });
  const todos = await response.json();
  return new Response(
    JSON.stringify({
      todos,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

export async function PATCH(request: Request) {
  const { id, isDone } = await request.json();
  const response = await fetch(`http://localhost:3001/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      isDone: !isDone,
    }),
  });
  const todo = await response.json();

  return Response.json({
    todo,
  });
}
