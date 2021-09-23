import { createClient } from "contentful";

import Layout from "../../components/Layout";
import Tag from "../../components/Blog/Tag";
import PostCard from "../../components/Blog/PostCard";
import Link from "next/link";
import FeaturedPostCard from "../../components/Blog/FeaturedPostCard";
import Panel from "../../components/Panel";
import PostLink from "../../components/Blog/PostLink";

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const posts = await client.getEntries({
    content_type: "blogPost",
    // skip: 50,
  });

  const tags = await client.getEntries({
    content_type: "tag",
  });
  return {
    props: {
      posts: posts.items,
      tags: tags.items,
    },
  };
}

export default function PostList({ posts, tags }) {
  // console.log({ posts, tags });
  return (
    <Layout posts>
      <div className="container px-4 mx-auto mt-4 grid grid-cols-12 gap-4">
        <Panel classes="col-span-12">
          <article className="">
            {/* <div className="text-2xl font-bold">Browse by Tags</div> */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => {
                const {
                  sys: { id },
                  fields: { name },
                } = tag;
                return <Tag key={id} name={name} variant="big" />;
              })}
            </div>
          </article>
        </Panel>

        {posts.length > 0 ? (
          <main className="grid grid-cols-12 gap-4 col-span-12 lg:col-span-8">
            {posts.map((post, index) => {
              const {
                sys: { id },
                fields: { title, excerpt, publishDate: date, tags, slug },
              } = post;
              return (
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
          </main>
        ) : (
          <div className="col-span-12 text-center text-2xl font-bold mt-10">
            Sorry, there are no more posts.
          </div>
        )}
        <Panel classes="col-span-12 lg:col-span-4">
          <aside>
            <article className="col-span-12">
              <h3 className="text-xl font-semibold">Bagus untuk Pemula</h3>
              <div className="mt-2 grid grid-cols-12">
                {posts
                  .filter((post) =>
                    post.fields.tags.some(
                      (tag) => tag.fields.name.toLowerCase() === "pemula"
                    )
                  )
                  .map((post) => {
                    return <PostLink post={post} key={post.sys.id} />;
                  })}
              </div>
            </article>
          </aside>
        </Panel>
      </div>
    </Layout>
  );
}
