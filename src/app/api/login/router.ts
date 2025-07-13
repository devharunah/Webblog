import { PrismaClient } from "@prisma/client"; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Response,Request } from 'express';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req:Request,res:Response) {
    if(req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' }).end()
        const { email, password } = req.body;

     const user = await prisma.user.findUnique({ where: { email } });
      if (!user) return res.status(401).json({ message: 'Invalid credentials' });

      const isValid = await bcrypt.compare(password,user.password)
      if (!isValid) return res.status(401).json({ message: 'Invalid credentials' });

      const token = jwt.sign({userId: user.id},JWT_SECRET,{expiresIn: '1h'});
      res.status(200).json({message: 'Login successful',token})
}
