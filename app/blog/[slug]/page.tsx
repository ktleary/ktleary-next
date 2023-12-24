import type {MDXComponents} from 'mdx/types';
import {MDXRemote} from 'next-mdx-remote/rsc';
import getSortedPostsData from '../../../lib/posts';

export async function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map(post => ({
    slug: post.slug,
  }));
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
  };
}

interface Post {
  title: string;
  description: string;
  date: string;
  slug: string;
  content: any;
}

export default function BlogPage({params}: {params: {slug: string}}) {
  const post: Post | undefined = getSortedPostsData().find(
    post => post.slug === params.slug,
  );
  if (!post) {
    return <div>Post not found</div>;
  }
  const {content} = post || {};

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
          h1: ({children}) => (
            <h1 className="text-2xl font-bold">{children}</h1>
          ),
          h2: ({children}) => (
            <h2 className="text-xl font-bold mt-2">{children}</h2>
          ),
          h3: ({children}) => (
            <h3 className="text-lg font-semibold mt-2">{children}</h3>
          ),
          p: ({children}) => (
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mt-2">
              {children}
            </p>
          ),
          a: ({children, href}) => (
            <a
              className="text-blue-500 dark:text-blue-400 hover:underline h-8"
              href={href}>
              {children}
            </a>
          ),
          ul: ({children}) => <ul className="list-disc pl-4">{children}</ul>,
          ol: ({children}) => <ol className="list-decimal">{children}</ol>,
          li: ({children}) => (
            <li className="text-gray-500 dark:text-gray-400 mt-2">
              {children}
            </li>
          ),
          div: ({children}) => <div className="">{children}</div>,

          // ...content,
        }}
      />
    </div>
  );
}

// export async function getStaticProps(
//   ctx: GetStaticPropsContext<{
//     slug: string;
//   }>,
// ) {
//   const {slug} = ctx.params!;

//   // retrieve the MDX blog post file associated
//   // with the specified slug parameter
//   const postFile = fs.readFileSync(`_posts/${slug}.mdx`);

//   // read the MDX serialized content along with the frontmatter
//   // from the .mdx blog post file
//   const mdxSource = await serialize(postFile, {parseFrontmatter: true});
//   return {
//     props: {
//       source: mdxSource,
//     },
//     // enable ISR
//     revalidate: 60,
//   };
// }
