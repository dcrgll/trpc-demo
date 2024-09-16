import { db } from '@/server/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = await db.post.findMany()

  return NextResponse.json(posts)
}
