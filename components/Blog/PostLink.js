import Link from "next/link";

export default function PostLink({ post }) {
  const {
    fields: { title, excerpt, slug },
  } = post;
  return (
    <Link href={`/posts/${slug}`}>
      <a className="">
        <article className="group p-4">
          <h2 className="text-xl font-semibold group-hover:text-primary">
            {title}
          </h2>
          <p className="mt-2">{excerpt}</p>
        </article>
      </a>
    </Link>
  );
}
