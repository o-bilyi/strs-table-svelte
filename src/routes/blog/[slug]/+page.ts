/** @type {import('./$types').PageLoad} */
import type { Load } from "@sveltejs/kit"
import { error } from '@sveltejs/kit';

export const load: Load = ({ params }) => {
  if (params.slug === 'hello-world') {
    return {
      title: `Title for ${params.slug} goes here`,
      content: `Content for ${params.slug} goes here`
    };
  }

  throw error(404, 'Not found');
}