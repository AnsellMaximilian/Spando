import client from "../contentful";

import Layout from "../components/Layout";
import Tag from "../components/Blog/Tag";
import Hero from "../components/Hero";
import PostCard from "../components/Blog/PostCard";
import Link from "next/link";
import FeaturedPostCard from "../components/Blog/FeaturedPostCard";
import Panel from "../components/Panel";
import PostLink from "../components/Blog/PostLink";

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
        <main className="grid grid-cols-12 gap-4 col-span-12 lg:col-span-8">
          {posts.slice(0, 10).map((post, index) => {
            const {
              sys: { id },
              fields: { title, excerpt, publishDate: date, tags, slug },
            } = post;
            return index === 0 ? (
              <FeaturedPostCard
                key={id}
                title={title}
                excerpt={excerpt}
                slug={slug}
                date={date}
                tags={tags.map((tag) => tag.fields.name)}
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
        <Panel classes="col-span-12 lg:col-span-4">
          <aside>
            <article>
              <h3 className="text-xl font-semibold">Browse by Tags</h3>
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
