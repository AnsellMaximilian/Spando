import { createClient } from "contentful";

import Layout from "../../components/Layout";
import Tag from "../../components/Blog/Tag";
import PostCard from "../../components/Blog/PostCard";
import Post from "../../components/Blog/Post";
import Link from "next/link";
import Panel from "../../components/Panel";

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
  return {
    props: {
      post: posts.items.find((post) => post.fields.slug === params.slug),
      tags: tags.items,
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

export default function Home({ post, tags }) {
  return (
    <Layout posts>
      <Post post={post} />
    </Layout>
  );
}
