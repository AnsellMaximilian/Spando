import { createClient } from "contentful";

import Layout from "../../components/Layout";
import PostCard from "../../components/Blog/PostCard";
import Panel from "../../components/Panel";
import PostLinkList from "../../components/Blog/PostLinkList";
import PostGrid from "../../components/Blog/PostGrid";
import Link from "next/link";

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const posts = await client.getEntries({
    content_type: "blogPost",
    skip: 10,
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
  return (
    <Layout posts>
      <div className="container px-4 mx-auto grid grid-cols-12 gap-4">
        {posts.length > 0 ? (
          <main className="col-span-12 mt-4">
            <PostGrid
              posts={posts}
              featuredSpanClass="col-span-12 md:col-span-8"
              spanClass="col-span-12 md:col-span-4"
            />
          </main>
        ) : (
          <Panel classes="col-span-12 mt-4 px-4 py-16">
            <div className="text-center text-2xl font-bold">
              Sorry, there are no more posts.
            </div>
            <div className="text-center mt-6">
              <Link href="/">
                <a className="bg-primary hover:bg-red-700 inline-block px-3 py-2 rounded-md text-white font-semibold text-md">
                  Back to homepage
                </a>
              </Link>
            </div>
          </Panel>
        )}
        {/* <Panel classes="col-span-12 lg:col-span-4">
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
        </Panel> */}
      </div>
    </Layout>
  );
}
