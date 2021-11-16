import client from "../contentful";

import Layout from "../components/Layout";
import Tag from "../components/Blog/Tag";
import Hero from "../components/Hero";
import Panel from "../components/Panel";
import PostGrid from "../components/Blog/PostGrid";
import PostLinkList from "../components/Blog/PostLinkList";
import Link from "next/link";

export async function getStaticProps(context) {
  const posts = await client.getEntries({
    content_type: "blogPost",
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
          <PostGrid posts={posts} />
        </div>
        <aside className="col-span-12 lg:col-span-4">
          <Panel>
            <article className="">
              <header className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-xl font-bold ">Browse by Tags</h3>
                <Link href="/">
                  <a className="font-semibold hover:text-red-600 text-sm">
                    All tags
                  </a>
                </Link>
              </header>
              <div className="flex flex-wrap gap-2 p-4">
                {tags.map((tag) => (
                  <Tag key={tag.sys.id} tag={tag} />
                ))}
              </div>
            </article>
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
