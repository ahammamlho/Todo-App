export async function fetchData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACK}/todo/alltodos`);
  const data = await response.json();
  return data;
}
