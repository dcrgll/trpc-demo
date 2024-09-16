import { db } from '@/server/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name } = (await req.json()) as { name: string }

  const post = await db.post.create({
    data: { name }
  })

  return NextResponse.json(post)
}
