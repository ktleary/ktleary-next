import getPosts, {getPost} from '../../lib/get-posts';
import {PostBody} from './[slug]/components/post-body';
import {notFound} from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getPosts();
  console.log('posts', posts);
  return posts.map(post => ({slug: post?.slug}));
}

export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);
  if (!post) return notFound();
  return <div>{post?.body}</div>;
}
