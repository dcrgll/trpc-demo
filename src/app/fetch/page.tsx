'use client'

import { useEffect, useState } from 'react'
import { type Post } from '@prisma/client'

import Form from '@/components/form'

export default function FetchPage() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/fetch/read')
      const data = (await res.json()) as Post[]
      setPosts(data)
    }

    void fetchPosts()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get('name') as string

    // the good stuff
    try {
      const response = await fetch('/api/fetch/create', {
        method: 'POST',
        body: JSON.stringify({ name })
      })

      const data = await response.json() // as Post

      setPosts([...posts, data])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex items-center justify-center gap-12 px-4 py-16">
        <div className="flex w-full flex-col gap-4">
          <pre>{JSON.stringify(posts, null, 2)}</pre>
          {!posts.length && <p>Loading...</p>}
        </div>

        <Form handleSubmit={handleSubmit} />
      </div>
    </main>
  )
}
