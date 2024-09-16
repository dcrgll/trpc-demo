import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex gap-4">
        <Link
          href="/trpc"
          className="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600"
        >
          TRPC
        </Link>

        <Link
          href="/fetch"
          className="rounded-md bg-violet-500 p-2 text-white hover:bg-violet-600"
        >
          Fetch
        </Link>
      </div>
    </main>
  )
}
