import client from "../contentful";

import Layout from "../components/Layout";
import Tag from "../components/Blog/Tag";
import Hero from "../components/Hero";
import Panel from "../components/Panel";
import PostGrid from "../components/Blog/PostGrid";
import PostLinkList from "../components/Blog/PostLinkList";

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
        <Panel classes="col-span-12 lg:col-span-4">
          <aside>
            <article>
              <h3 className="text-xl font-semibold">Browse by Tags</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => {
                  const {
                    sys: { id },
                    fields: { name, slug },
                  } = tag;
                  return <Tag key={id} name={name} slug={slug} variant="big" />;
                })}
              </div>
            </article>
            <div className="pt-8">
              <PostLinkList
                listTitle="Bagus untuk Pemula"
                posts={posts.filter((post) =>
                  post.fields.tags.some(
                    (tag) => tag.fields.name.toLowerCase() === "pemula"
                  )
                )}
              />
            </div>
          </aside>
        </Panel>
      </div>
    </Layout>
  );
}
