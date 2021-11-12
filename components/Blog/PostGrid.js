import React from "react";
import PostCard from "../../components/Blog/PostCard";
import Link from "next/link";

export default function PostGrid({ posts }) {
  return (
    <main className="grid grid-cols-12 gap-4">
      {posts.slice(0, 10).map((post, index) => {
        const {
          sys: { id },
          fields: { title, excerpt, publishDate: date, tags, slug },
        } = post;
        return index === 0 ? (
          <PostCard
            key={id}
            title={title}
            excerpt={excerpt}
            slug={slug}
            date={date}
            tags={tags.map((tag) => tag.fields.name)}
            featured
          />
        ) : (
          <PostCard
            key={id}
            title={title}
            slug={slug}
            excerpt={excerpt}
            date={date}
            tags={tags.map((tag) => tag.fields.name)}
          />
        );
      })}
      <div className="col-span-12 text-center">
        <Link href="/posts">
          <a className="text-red-600 hover:underline font-semibold text-lg uppercase">
            View more posts
          </a>
        </Link>
      </div>
    </main>
  );
}
