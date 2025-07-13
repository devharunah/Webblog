import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server'; // Correct Next.js types

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {

  const { firstName, secondName, email, password } = await req.json();

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      firstName,
      secondName,
      email,
      password: hashedPassword
    }
  });

  return NextResponse.json({ message: 'User created', userId: user.id }, { status: 201 });
}