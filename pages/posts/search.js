import { createClient } from "contentful";
import Link from "next/link";

import Layout from "../../components/Layout";
import PostCard from "../../components/Blog/PostCard";
import Panel from "../../components/Panel";
import PostLinkList from "../../components/Blog/PostLinkList";
import Search from "../../components/Search";

export async function getServerSideProps(context) {
  const searchQuery = context.query.q;
  const sort = context.query.sort;
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const posts = await client.getEntries({
    content_type: "blogPost",
    query: searchQuery,
    order: !sort
      ? undefined
      : sort === "newest"
      ? "-sys.createdAt"
      : "sys.createdAt",
  });

  return {
    props: {
      posts: posts.items,
      sort: sort || null,
      searchQuery: searchQuery || null,
    },
  };
}

export default function PostList({ posts, searchQuery, sort }) {
  return (
    <Layout posts>
      <div className="container px-4 mx-auto mt-4 grid grid-cols-12 gap-4">
        <Panel classes="col-span-12 px-4">
          {searchQuery ? (
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">
                Hasil cari &#34;{searchQuery}&#34;
              </h1>
              <div>
                <Link href={`/posts/search?q=${searchQuery}`}>
                  <a
                    className={`inline-block py-4 px-2 border-primary ${
                      sort === null ? "border-b-4 font-bold" : ""
                    }`}
                  >
                    Semua
                  </a>
                </Link>
                <Link href={`/posts/search?q=${searchQuery}&sort=newest`}>
                  <a
                    className={`inline-block py-4 px-2 border-primary ${
                      sort === "newest" ? "border-b-4 font-bold" : ""
                    }`}
                  >
                    Terbaru
                  </a>
                </Link>
                <Link href={`/posts/search?q=${searchQuery}&sort=oldest`}>
                  <a
                    className={`inline-block py-4 px-2 border-primary ${
                      sort === "oldest" ? "border-b-4 font-bold" : ""
                    }`}
                  >
                    Terlama
                  </a>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-bold mb-4">
                Search for posts by their contents.
              </h1>
              <div className="w-full md:w-96">
                <Search fullWidth />
              </div>
            </div>
          )}
        </Panel>
        {posts.length > 0 ? (
          <main className="grid grid-cols-12 gap-4 col-span-12 lg:col-span-8">
            {posts.map((post, index) => {
              const {
                sys: { id },
                fields: { title, excerpt, publishDate: date, tags, slug },
              } = post;
              return (
                <Panel key={id} classes="col-span-12 md:col-span-6">
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
        ) : (
          <div className="col-span-12 text-center text-2xl font-bold mt-10">
            Sorry, your search returned no results.
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
