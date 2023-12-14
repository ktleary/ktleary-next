import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import remarkToc from 'remark-toc';

export function PostBody({children}: {children: string}) {
  return <div className="p-4 m-4 w-full h-full text-xl">{children}</div>;
}

/*
<MDXRemote
source={children}
options={{
mdxOptions: {
remarkPlugins: [
// Adds support for GitHub Flavored Markdown
remarkGfm,
// Makes emojis more accessible
remarkA11yEmoji,
// generates a table of contents based on headings
remarkToc,
],
// These work together to add IDs and linkify headings
rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
},
}}
components={mdxComponents}
/>
*/
