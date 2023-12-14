import {getSortedPostsData} from '../../lib/posts';

export default async function PostPage() {
  const posts = getSortedPostsData();
  /*
---
title: Microsoft.js
description: How one tech giant came to dominate the Javascript ecosystem
date: Dec 14, 2019
slug: microsoft-js
---
*/

  const PostCard = ({post}: {post: any}) => {
    const {title, description, date, slug} = post || {};
    return (
      <div className="flex flex-col mt-4">
        <div className="text-2xl font-bold">
          <a href={`/blog/${slug}`}>{title}</a>
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
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold">Blog</h2>
      <div className="text-lg font-normal mt-4">
        {posts.map(post => (
          <PostCard post={post} key={post.slug} />
        ))}
      </div>
    </section>
  );
}
