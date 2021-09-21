import Link from "next/link";
export default function Tag({ name }) {
  return (
    <Link href="/">
      <a className="bg-gray-200 px-2 py-1 rounded-xl text-gray-600 text-sm hover:underline">
        {name}
      </a>
    </Link>
  );
}
