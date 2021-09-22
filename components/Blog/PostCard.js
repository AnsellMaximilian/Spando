import Tag from "./Tag";
import Link from "next/link";
import Panel from "../Panel";

export default function PostCard({ title, excerpt, date, tags }) {
  return (
    <Panel classes="col-span-12 md:col-span-6">
      <article>
        <Link href="/">
          <a>
            <h2 className="text-2xl font-bold hover:underline">{title}</h2>
            <p className="mt-2">{excerpt}</p>
          </a>
        </Link>
        <span className="text-sm text-gray-500 font-normal mt-2 uppercase">
          {date}
        </span>
        <div className="flex gap-2 flex-wrap mt-2">
          {tags.map((tag) => (
            <Tag name={tag} key={tag} />
          ))}
        </div>
      </article>
    </Panel>
  );
}
