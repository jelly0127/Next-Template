import db from '@/db';

export async function GET(): Promise<Response> {
  try {
    const users = await db.user.findMany();
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch users' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();
    const newUser = await db.user.create({
      data: {
        name: body.name,
        email: body.email,
        // Add other fields as necessary
      },
    });
    return new Response(JSON.stringify(newUser), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create user' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
