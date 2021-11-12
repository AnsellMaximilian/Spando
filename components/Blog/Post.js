import reactRichTextRenderer from "../../src/utils/renderRichText";
import moment from "moment";
import Link from "next/link";

import { FaTwitter } from "react-icons/fa";

import Tag from "./Tag";

export default function Home({ post }) {
  const {
    fields: { title, tags, body, publishDate, slug },
  } = post;
  // console.log(body);
  return (
    <article className="max-w-xl ml-auto">
      <h1 className="font-bold text-4xl">{title}</h1>
      <div className="flex justify-between items-center mt-1">
        <div className="text-gray-600">{moment(publishDate).fromNow()}</div>
        <div>
          <a
            className="bg-blue-500 text-white flex items-center rounded p-2"
            href={`https://twitter.com/intent/tweet?text=${title} localhost:3000/posts/${slug}`}
            target="_blank"
            rel="noreferrer"
          >
            {/* <span className="mr-2">Tweet</span> */}
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => {
          const {
            sys: { id },
            fields: { name },
          } = tag;
          return <Tag name={name} key={id} />;
        })}
      </div>
      <section className="mt-4">{reactRichTextRenderer(body)}</section>
    </article>
  );
}
