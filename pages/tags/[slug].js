import client from "../../contentful";

import Layout from "../../components/Layout";
import Panel from "../../components/Panel";
import PostLink from "../../components/Blog/PostLink";
import PostCard from "../../components/Blog/PostCard";

export async function getStaticPaths() {
  const { tags } = await getPostsAndTags();

  const paths = tags.items.map((tag) => ({
    params: { slug: tag.fields.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { posts, tags } = await getPostsAndTags();
  return {
    props: {
      tags: tags.items,
      posts: posts.items.filter(
        (post) =>
          post.fields.tags.filter((tag) => tag.fields.slug === params.slug)
            .length > 0
      ),
    },
  };
}

async function getPostsAndTags() {
  const posts = await client.getEntries({
    content_type: "blogPost",
  });

  const tags = await client.getEntries({
    content_type: "tag",
  });

  return { posts, tags };
}

export default function Home({ posts, tags }) {
  return (
    <Layout posts>
      <div className="container px-4 mx-auto mt-4 grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <h1 className="text-4xl font-bold text-center">
            Browsing by tag: Terjemahan
          </h1>
        </div>
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
                  tags={tags}
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
          <aside></aside>
        </Panel>
      </div>
    </Layout>
  );
}
