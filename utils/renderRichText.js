import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";
const options = {
  renderMark: {
    // [MARKS.BOLD]: function Bold(text) {
    //   return <strong className="font-bold">{text}</strong>;
    // },
  },
  renderNode: {
    [INLINES.HYPERLINK]: function Hyperlink({ data }, children) {
      return (
        <a href={data.uri} className="underline">
          {children}
        </a>
      );
    },
    [BLOCKS.UL_LIST]: function UnorderedList(node, children) {
      return <ul>{children}</ul>;
    },
    [INLINES.EMBEDDED_ENTRY]: function InlineEntry({ data }, children) {
      const content = data.target;
      if (content.sys.contentType.sys.id === "blogPost") {
        return (
          <Link href={`/posts/${content.fields.slug}`}>
            <a>{content.fields.title}</a>
          </Link>
        );
      }
      return "FAG";
    },

    [BLOCKS.OL_LIST]: function OrderedList(node, children) {
      return <ol className="bg-red-500">{children}</ol>;
    },
    [BLOCKS.PARAGRAPH]: function Paragraph(node, children) {
      return <p className="mt-3 text-lg">{children}</p>;
    },
    [BLOCKS.HEADING_2]: function Heading(node, children) {
      return <h4 className="font-bold mt-6 text-3xl">{children}</h4>;
    },
    [BLOCKS.HEADING_3]: function Heading(node, children) {
      return <h4 className="font-bold mt-6 text-2xl">{children}</h4>;
    },
    [BLOCKS.HEADING_4]: function Heading(node, children) {
      return <h4 className="font-bold mt-6 text-xl">{children}</h4>;
    },
    [BLOCKS.HEADING_5]: function Heading(node, children) {
      return <h5 className="font-bold mt-6 text-lg">{children}</h5>;
    },
    [BLOCKS.HEADING_6]: function Heading(node, children) {
      return <h6 className="font-bold mt-6">{children}</h6>;
    },
  },
};

const reactRichTextRenderer = (body) => {
  return documentToReactComponents(body, options);
};

export default reactRichTextRenderer;
