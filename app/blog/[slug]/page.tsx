import getSortedPostsData from '../../../lib/posts';

export async function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default function BlogPage({params}: {params: {slug: string}}) {
  const post = getSortedPostsData().find(post => post.slug === params.slug);
  console.log(post);
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div className="flex flex-col mt-4 p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        {post.description}
      </p>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        {post.date}
      </p>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mt-4">
        {post.content}
      </p>
    </div>
  );
}
