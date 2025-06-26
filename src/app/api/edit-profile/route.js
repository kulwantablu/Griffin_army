import { connectDB } from '../../../db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function PUT(req) {
  const { username, currentPassword, newPassword } = await req.json();
  const db = await connectDB();

  const [rows] = await db.execute(
    'SELECT * FROM admin WHERE username=?',
    [username]
  );

  if (rows.length > 0) {
    const user = rows[0];

    // Compare the provided current password with the stored hashed password
    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (isMatch) {
      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Update the password in the database
      await db.execute(
        'UPDATE admin SET password=? WHERE username=?',
        [hashedPassword, username]
      );

      return NextResponse.json({ message: 'Profile updated successfully' });
    } else {
      return NextResponse.json({ error: 'Incorrect current password' }, { status: 401 });
    }
  }

  return NextResponse.json({ error: 'User not found' }, { status: 404 });
}
