import Tag from "./Tag";
import Link from "next/link";
import Panel from "../Panel";
import moment from "moment";

export default function PostCard({ title, excerpt, date, tags, slug }) {
  return (
    <Panel classes="col-span-12 p-6">
      <article>
        <div className="text-red-600 text-xl font-bold">FEATURED</div>
        <Link href={`/posts/${slug}`}>
          <a>
            <h2 className="text-4xl font-bold hover:underline">{title}</h2>
            <p className="mt-2 text-xl">{excerpt}</p>
          </a>
        </Link>

        <span className="text-sm text-gray-500 font-normal mt-2 uppercase">
          {moment(date).fromNow()}
        </span>
        <div className="flex gap-2 flex-wrap mt-2">
          {tags.map((tag) => (
            <Tag name={tag} key={tag} variant="big" />
          ))}
        </div>
      </article>
    </Panel>
  );
}
