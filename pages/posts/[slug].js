import { createClient } from "contentful";

import Layout from "../../components/Layout";
import Post from "../../components/Blog/Post";
import Panel from "../../components/Panel";
import PostLink from "../../components/Blog/PostLink";

export async function getStaticPaths() {
  const {
    posts: { items: posts },
  } = await getPostsAndTags();

  const paths = posts.map((post) => ({
    params: { slug: post.fields.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { posts, tags } = await getPostsAndTags();
  const mainPost = posts.items.find((post) => post.fields.slug === params.slug);
  return {
    props: {
      post: mainPost,
      tags: tags.items,
      similarPosts: posts.items.filter(
        (post) =>
          post.fields.slug !== params.slug &&
          post.fields.tags.some((tag) => mainPost.fields.tags.includes(tag))
      ),
    },
  };
}

async function getPostsAndTags() {
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

  return { posts, tags };
}

export default function Home({ post, tags, similarPosts }) {
  console.log(similarPosts);
  return (
    <Layout posts>
      <div className="container mx-auto px-4 grid grid-cols-12 gap-4 mt-8">
        <main className="col-span-12 md:col-span-8">
          <Post post={post} />
        </main>
        <Panel classes="col-span-12 md:col-span-4">
          <aside className="">
            {similarPosts.length > 0 && (
              <article>
                <div className="text-xl font-semibold">Mirip</div>
                <section className="mt-2">
                  {similarPosts.map((post) => {
                    return <PostLink post={post} key={post.sys.id} />;
                  })}
                </section>
              </article>
            )}
          </aside>
        </Panel>
      </div>
    </Layout>
  );
}
