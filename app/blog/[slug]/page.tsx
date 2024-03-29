import { MDXRemote } from "next-mdx-remote/rsc";
import getSortedPostsData from "../../../lib/posts";

export async function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface Post {
  title: string;
  description: string;
  date: string;
  slug: string;
  content: any;
}

interface BlogPageProps {
  params: any;
  searchParams?: any;
}

export default function BlogPage({ params }: any) {
  // {params: {slug: string}}) {
  const post: Post | undefined = getSortedPostsData().find(
    (post) => post.slug === params.slug
  );
  if (!post) {
    return <div>Post not found</div>;
  }
  const { content } = post || {};

  return (
    <div className="flex flex-col mt-24 p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        {post.description}
      </p>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-2">
        {post.date}
      </p>

      <MDXRemote
        source={content}
        // specifying the custom MDX components
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-bold">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-bold mt-2">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold mt-2">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mt-4">
              {children}
            </p>
          ),
          a: ({ children, href }) => (
            <a
              className="text-blue-500 dark:text-blue-400 hover:underline h-8"
              href={href}
            >
              {children}
            </a>
          ),
          ul: ({ children }) => <ul className="list-disc pl-4">{children}</ul>,
          ol: ({ children }) => (
            <ol className="list-decimal pl-4">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-500 dark:text-gray-400 mt-2">
              {children}
            </li>
          ),
          div: ({ children }) => <div className="mt-2">{children}</div>,

          // ...content,
        }}
      />
    </div>
  );
}
