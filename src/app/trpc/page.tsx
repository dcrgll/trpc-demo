'use client'

import { api } from '@/trpc/react'

import Form from '@/components/form'

export default function FetchPage() {
  const utils = api.useUtils()

  const { data: posts, isLoading } = api.post.read.useQuery()

  const { mutate: createPost } = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate()
    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get('name') as string

    createPost({ name })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex items-center justify-center gap-12 px-4 py-16">
        <div className="flex w-full flex-col gap-4">
          <pre>
            {JSON.stringify(posts, null, 2)}
            {isLoading && <p>Loading...</p>}
          </pre>
        </div>

        <Form handleSubmit={handleSubmit} />
      </div>
    </main>
  )
}
