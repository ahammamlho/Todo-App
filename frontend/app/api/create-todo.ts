export async function createTodo(todo: { todo: string }) {
  await fetch(`${process.env.NEXT_PUBLIC_BACK}/todo/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
}
