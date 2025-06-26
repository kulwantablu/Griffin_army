import { connectDB } from '../../../db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';


export async function POST(req) {
  const { username, password } = await req.json();
  const db = await connectDB();

  const [rows] = await db.execute(
    'SELECT * FROM admin WHERE username=?',
    [username]
  );

  if (rows.length > 0) {
    const user = rows[0];

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const response = NextResponse.json({ success: true });

      response.cookies.set({
        name: 'admin_token',
        value: 'secure_token',
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24,
      });

      return response;
    }
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
