import Link from "next/link";

export default function PostLink({ post }) {
  const {
    fields: { title, excerpt, slug },
  } = post;
  return (
    <Link href={`/posts/${slug}`}>
      <a className="col-span-12 md:col-span-6 lg:col-span-12">
        <article className="mb-4">
          <h2 className="text-xl font-bold hover:underline">{title}</h2>
          <p className="mt-2">{excerpt}</p>
        </article>
      </a>
    </Link>
  );
}
