import reactRichTextRenderer from "../../utils/renderRichText";
import moment from "moment";

import Tag from "./Tag";

export default function Home({ post }) {
  const {
    fields: { title, tags, body, publishDate },
  } = post;
  // console.log(body);
  return (
    <article className="max-w-xl ml-auto">
      <h1 className="font-bold text-4xl">{title}</h1>
      <div className="mt-1 text-gray-600">{moment(publishDate).fromNow()}</div>
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
