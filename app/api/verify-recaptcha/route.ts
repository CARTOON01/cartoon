import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { token } = await request.json();

  try {
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.YOUR_SECRET_KEY}&response=${token}`, {
      method: 'POST',
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, message: 'reCAPTCHA verification failed' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error verifying reCAPTCHA' }, { status: 500 });
  }
}