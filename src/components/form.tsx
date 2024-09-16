export default function Form({
  handleSubmit
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) {
  return (
    <form
      className="flex w-full max-w-md flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="rounded-md border border-gray-300 p-2"
      />

      <button type="submit" className="rounded-md bg-blue-500 p-2 text-white">
        Submit
      </button>
    </form>
  )
}
