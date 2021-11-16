import client from "../../contentful";

import Layout from "../../components/Layout";
import PostCard from "../../components/Blog/PostCard";
import Panel from "../../components/Panel";
import PostLinkList from "../../components/Blog/PostLinkList";
import Link from "next/link";

export async function getStaticProps(context) {
  const tags = await client.getEntries({
    content_type: "tag",
  });

  return {
    props: {
      tags: tags.items,
    },
  };
}

export default function PostList({ tags }) {
  // console.log({ posts, tags });
  return (
    <Layout tags>
      <div className="container px-4 mx-auto mt-4 grid grid-cols-12 gap-4">
        <Panel classes="col-span-12 lg:col-span-8">
          <main>
            {tags.map((tag) => (
              <article
                key={tag.sys.id}
                className="p-4 border-b border-gray-200 hover:bg-gray-100 group"
              >
                <Link href={`/tags/${tag.fields.slug}`}>
                  <a className="block">
                    <h2 className="font-bold group-hover:text-red-600">
                      {tag.fields.name}
                    </h2>
                    <p>{tag.fields.description}</p>
                  </a>
                </Link>
              </article>
            ))}
          </main>
        </Panel>
        <Panel classes="col-span-12 lg:col-span-4">
          <aside></aside>
        </Panel>
      </div>
    </Layout>
  );
}
