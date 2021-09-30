import Link from "next/link";
export default function Tag({ name, variant, slug }) {
  const additionalClasses =
    variant === "big" ? "px-4 py-2 text-lg" : "px-2 py-1";
  return (
    <Link href={`/tag/${slug}`}>
      <a
        className={`bg-gray-200 px-2 py-1 rounded-xl text-gray-600 text-sm hover:underline ${additionalClasses}`}
      >
        {name}
      </a>
    </Link>
  );
}
