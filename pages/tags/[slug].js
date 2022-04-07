import Link from "next/link";

import client from "../../contentful";

import Layout from "../../components/Layout";
import Panel from "../../components/Panel";
import PostCard from "../../components/Blog/PostCard";
import Tag from "../../components/Blog/Tag";

export async function getStaticPaths() {
  const tags = await client.getEntries({
    content_type: "tag",
  });

  const paths = tags.items.map((tag) => ({
    params: { slug: tag.fields.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const posts = await client.getEntries({
    content_type: "blogPost",
  });

  const tags = await client.getEntries({
    content_type: "tag",
  });

  const tag = tags.items.find((tag) => tag.fields.slug === params.slug);
  return {
    props: {
      slug: params.slug,
      tags: tags.items,
      tag,
      posts: posts.items.filter((post) =>
        post.fields.tags.some((tag) => tag.fields.slug === params.slug)
      ),
    },
  };
}

export default function Home({ posts, tag, tags, slug }) {
  return (
    <Layout posts>
      <div className="container px-4 mx-auto mt-4 grid grid-cols-12 gap-4">
        <Panel classes="col-span-12 text-center">
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">
              Menelusuri Tag {tag.fields.name}
            </h1>
            <p>{tag.fields.description}</p>
          </div>
          <div className="border-t-2 border-gray-200 p-4">
            {/* <h3 className="font-semibold mb-2">Semua Tag</h3> */}
            <div className="flex gap-4 flex-wrap">
              {tags.map((tag) => (
                <Tag
                  tag={tag}
                  key={tag.sys.id}
                  active={slug === tag.fields.slug}
                />
              ))}
            </div>
          </div>
        </Panel>
        {posts.length > 0 ? (
          <main className="grid grid-cols-12 gap-4 col-span-12">
            {posts.map((post, index) => {
              const {
                sys: { id },
                fields: { title, excerpt, publishDate: date, tags, slug },
              } = post;
              return (
                <Panel key={id} classes="col-span-12 md:col-span-4">
                  <PostCard
                    title={title}
                    slug={slug}
                    excerpt={excerpt}
                    date={date}
                    tags={tags}
                  />{" "}
                </Panel>
              );
            })}
          </main>
        ) : (
          <div className="col-span-12 text-center text-2xl font-bold mt-10">
            Sorry, there are no more posts.
          </div>
        )}
      </div>
    </Layout>
  );
}
