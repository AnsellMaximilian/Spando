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
        <main className="col-span-12 grid grid-cols-12 gap-4">
          {tags.map((tag) => (
            <Panel
              key={tag.sys.id}
              classes="md:col-span-4 col-span-12 group hover:bg-gray-100 flex flex-col"
            >
              <Link href={`/tags/${tag.fields.slug}`}>
                <a className="block flex-1">
                  <article className="p-4">
                    <h2 className="font-bold group-hover:text-primary text-xl">
                      {tag.fields.name}
                    </h2>
                    <p>{tag.fields.description}</p>
                  </article>
                </a>
              </Link>
            </Panel>
          ))}
        </main>
        {/* <Panel classes="col-span-12 lg:col-span-4">
          <aside></aside>
        </Panel> */}
      </div>
    </Layout>
  );
}
