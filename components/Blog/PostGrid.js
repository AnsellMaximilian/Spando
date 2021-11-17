import React from "react";
import PostCard from "../../components/Blog/PostCard";
import Link from "next/link";
import Panel from "../Panel";

export default function PostGrid({
  posts,
  featuredSpanClass = "col-span-12",
  spanClass = "col-span-12 md:col-span-6",
}) {
  return (
    <main className="grid grid-cols-12 gap-4">
      {posts.map((post, index) => {
        const {
          sys: { id },
          fields: { title, excerpt, publishDate: date, tags, slug },
        } = post;
        return index === 0 ? (
          <Panel classes={featuredSpanClass} key={id}>
            <PostCard
              title={title}
              excerpt={excerpt}
              slug={slug}
              date={date}
              tags={tags}
              featured
            />
          </Panel>
        ) : (
          <Panel classes={spanClass} key={id}>
            <PostCard
              title={title}
              slug={slug}
              excerpt={excerpt}
              date={date}
              tags={tags}
            />
          </Panel>
        );
      })}
    </main>
  );
}
