export async function updateTodo(id: string, todo: { todo: string }) {
  await fetch(`${process.env.NEXT_PUBLIC_BACK}/todo/update/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
}
