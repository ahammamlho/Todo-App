export async function changeStatus(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACK}/todo/updateStatus/${id}`,
    {
      method: "PATCH",
    }
  );
  console.log(response);
}
