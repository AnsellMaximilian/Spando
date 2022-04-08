import client from "../contentful";

import Layout from "../components/Layout";
import Tag from "../components/Blog/Tag";
import Hero from "../components/Hero";
import Panel from "../components/Panel";
import PostGrid from "../components/Blog/PostGrid";
import PostLinkList from "../components/Blog/PostLinkList";
import Link from "next/link";
import BrowseByTag from "../components/Blog/BrowseByTag";

export async function getStaticProps(context) {
  const posts = await client.getEntries({
    content_type: "blogPost",
    limit: 10,
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

export default function Home({ posts, tags }) {
  return (
    <Layout home>
      <Hero />
      <div className="container px-4 mx-auto mt-16 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8">
          <PostGrid
            posts={posts}
            extraItem={
              <Link href="/posts">
                <a className="flex items-center justify-center px-3 py-2 bg-primary hover:bg-red-700 h-full w-full rounded-md text-white font-semibold text-md md:text-2xl">
                  <span>View more</span>
                </a>
              </Link>
            }
          />
        </div>
        <aside className="col-span-12 lg:col-span-4">
          <Panel>
            <BrowseByTag tags={tags} />
          </Panel>
          <Panel classes="mt-2">
            <PostLinkList
              listTitle="Bagus untuk Pemula"
              listItemClasses="col-span-12 md:col-span-6 lg:col-span-12 border-b border-gray-200 last:border-b-0"
              posts={posts.filter((post) =>
                post.fields.tags.some(
                  (tag) => tag.fields.name.toLowerCase() === "pemula"
                )
              )}
            />
          </Panel>
        </aside>
      </div>
    </Layout>
  );
}
