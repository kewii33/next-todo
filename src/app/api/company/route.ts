export async function GET(request: Request) {
  const response = await fetch(`http://localhost:3001/companyInfo`, {
    cache: 'no-cache',
  });
  const companyInfo = await response.json();

  if (!companyInfo) {
    return new Response('회사 정보가 없습니다.', {
      status: 404,
    });
  }
  return new Response(
    JSON.stringify({
      companyInfo,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
