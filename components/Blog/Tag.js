import Link from "next/link";
export default function Tag({ variant, tag }) {
  const additionalClasses =
    variant === "big" ? "px-4 py-2 text-lg" : "px-2 py-1";
  return (
    <Link href={`/tags/${tag.fields.slug}`}>
      <a
        className={`bg-gray-100 px-2 py-1 rounded-md text-gray-600 text-sm hover:bg-gray-200 hover:text-black border border-gray-100 hover:border-gray-300 ${additionalClasses}`}
      >
        {tag.fields.name}
      </a>
    </Link>
  );
}
