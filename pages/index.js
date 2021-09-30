import client from "../contentful";

import Layout from "../components/Layout";
import Tag from "../components/Blog/Tag";
import Hero from "../components/Hero";
import Panel from "../components/Panel";
import PostLink from "../components/Blog/PostLink";
import PostGrid from "../components/Blog/PostGrid";

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
        <PostGrid posts={posts} />
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
