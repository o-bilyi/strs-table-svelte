import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
 
  return { data: data };
}) satisfies PageLoad;