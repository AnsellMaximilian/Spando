import { createClient } from "contentful";

import Layout from "../components/Layout";
import Tag from "../components/Blog/Tag";
import Hero from "../components/Hero";
import PostCard from "../components/Blog/PostCard";
import Link from "next/link";
import FeaturedPostCard from "../components/Blog/FeaturedPostCard";
import Panel from "../components/Panel";

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

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
  // console.log({ posts, tags });
  return (
    <Layout home>
      <Hero />
      <div className="container px-4 mx-auto mt-16 grid grid-cols-12 gap-4">
        <main className="grid grid-cols-12 gap-4 col-span-12 lg:col-span-8">
          {posts.map((post, index) => {
            const {
              sys: { id },
              fields: { title, excerpt, publishDate: date, tags },
            } = post;
            return index === 0 ? (
              <FeaturedPostCard
                key={id}
                title={title}
                excerpt={excerpt}
                date={new Date(date).toDateString().slice(4)}
                tags={tags.map((tag) => tag.fields.name)}
              />
            ) : (
              <PostCard
                key={id}
                title={title}
                excerpt={excerpt}
                date={new Date(date).toDateString().slice(4)}
                tags={tags.map((tag) => tag.fields.name)}
              />
            );
          })}
        </main>
        <Panel classes="col-span-12 lg:col-span-4">
          <aside>
            <article>
              <h3 className="text-xl font-bold">Browse by Tags</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => {
                  const {
                    sys: { id },
                    fields: { name },
                  } = tag;
                  return <Tag key={id} name={name} variant="big" />;
                })}
              </div>
            </article>
            <article className="col-span-12 pt-8">
              <h3 className="text-xl font-bold">Bagus untuk Pemula</h3>
              <div className="mt-2 grid grid-cols-12">
                {posts
                  .filter((post) =>
                    post.fields.tags.some(
                      (tag) => tag.fields.name.toLowerCase() === "pemula"
                    )
                  )
                  .map((post) => {
                    const {
                      sys: { id },
                      fields: { title, excerpt },
                    } = post;
                    return (
                      <Link href="/" key={id}>
                        <a className="col-span-12 md:col-span-6 lg:col-span-12">
                          <article className="mb-4">
                            <h2 className="text-lg font-bold hover:underline">
                              {title}
                            </h2>
                            <p className="mt-2">{excerpt}</p>
                          </article>
                        </a>
                      </Link>
                    );
                  })}
              </div>
            </article>
          </aside>
        </Panel>
      </div>
    </Layout>
  );
}
