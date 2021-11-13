import { createClient } from "contentful";

import Layout from "../../components/Layout";
import PostCard from "../../components/Blog/PostCard";
import Panel from "../../components/Panel";
import PostLinkList from "../../components/Blog/PostLinkList";

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
            <PostLinkList
              listTitle="Bagus untuk Pemula"
              posts={posts.filter((post) =>
                post.fields.tags.some(
                  (tag) => tag.fields.name.toLowerCase() === "pemula"
                )
              )}
              listItemClasses="col-span-12 md:col-span-6 lg:col-span-12 border-b border-gray-200 last:border-b-0"
            />
          </aside>
        </Panel>
      </div>
    </Layout>
  );
}
