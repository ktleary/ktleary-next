import getSortedPostsData from '../../lib/posts';
import Link from 'next/link';

export default async function PostPage() {
  const posts = getSortedPostsData();

  const PostCard = ({post}: {post: any}) => {
    const {title, description, date, slug} = post || {};
    return (
      <div className="flex flex-col mt-4">
        <div className="text-2xl font-bold">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </div>
        <div className="text-lg font-normal text-gray-500 dark:text-gray-400">
          {description}
        </div>
        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {date}
        </div>
      </div>
    );
  };

  return (
    <section className="flex flex-col justify-center items-center mt-24 p-8 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold">Blog</h2>
      <div className="text-lg font-normal mt-4">
        {posts.map(post => (
          <PostCard post={post} key={post.slug} />
        ))}
      </div>
    </section>
  );
}
