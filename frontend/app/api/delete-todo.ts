export async function deleteTodo(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACK}/todo/delete/${id}`,
    {
      method: "DELETE",
    }
  );
  console.log(response);
}
