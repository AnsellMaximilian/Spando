import reactRichTextRenderer from "../../utils/renderRichText";

import Tag from "./Tag";
import Link from "next/link";
import Panel from "../Panel";

export default function Home({ post }) {
  const {
    fields: { title, tags, body },
  } = post;
  // console.log(body);
  return (
    <article className="max-w-xl ml-auto">
      <h1 className="font-bold text-4xl">{title}</h1>
      <div className="mt-4">
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
