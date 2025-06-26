import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: 'admin_token',
    value: '',
    path: '/',
    expires: new Date(0),
  });

  return response;
}
