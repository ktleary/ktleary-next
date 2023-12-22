/*

const thirdPartyPosts: Post[] = [
  {
    title: 'Introducing the Vercel AI SDK',
    description:
      'An interoperable, streaming-enabled, edge-ready software development kit for AI apps built with React and Svelte.',
    body: '',
    date: '2023-06-15T13:00:00.000Z',
    slug: '',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://vercel.com/blog/introducing-the-vercel-ai-sdk',
  },
  */

export type Post = {
  slug: string;
  title: string;
  body: string;
  published?: boolean;
  description: string;
  date: string;
  tags: string[];
  lastModified: number;
  isThirdParty: boolean;
  href: string;
};
