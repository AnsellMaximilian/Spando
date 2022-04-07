import Link from "next/link";
export default function Tag({ variant, tag, active }) {
  const additionalClasses =
    variant === "big" ? "px-4 py-2 text-lg" : "px-2 py-1";
  return (
    <Link href={`/tags/${tag.fields.slug}`}>
      <a
        className={`px-2 py-1 rounded-md  ${
          active
            ? "text-black border bg-gray-200 border-gray-300"
            : "bg-gray-100 text-gray-600 border-gray-100"
        }  text-sm hover:bg-gray-200 hover:text-black border hover:border-gray-300 ${additionalClasses}`}
      >
        {tag.fields.name}
      </a>
    </Link>
  );
}
