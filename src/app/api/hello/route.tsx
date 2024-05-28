export async function GET(): Promise<Response> {
  return new Response(JSON.stringify({ message: 'Hello from API!' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function POST(request: Request): Promise<Response> {
  const body = await request.json();
  return new Response(JSON.stringify({ message: `Hello, ${body.name}` }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
