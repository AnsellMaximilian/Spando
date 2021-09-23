import reactRichTextRenderer from "../../utils/renderRichText";

import Tag from "./Tag";
import Link from "next/link";
import Panel from "../Panel";

export default function Home({ post }) {
  const {
    fields: { title, tags, body },
  } = post;
  console.log(body);
  return (
    <article className="container px-4 mx-auto">
      <h1 className="font-bold text-4xl">{title}</h1>
      <div>
        {tags.map((tag) => {
          const {
            sys: { id },
            fields: { name },
          } = tag;
          return <Tag name={name} key={id} />;
        })}
      </div>
      <section>{reactRichTextRenderer(body)}</section>
    </article>
  );
}
