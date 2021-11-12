import Tag from "./Tag";
import Link from "next/link";
import Panel from "../Panel";
import moment from "moment";
import Image from "next/image";
import defaultThumbnail from "../../public/images/default-thumbnail.jpg";

export default function PostCard({
  title,
  excerpt,
  date,
  tags,
  slug,
  featured = false,
}) {
  return (
    <Panel
      classes={`relative col-span-12 ${featured ? "p-6" : "md:col-span-6"}`}
    >
      <Link href={`/posts/${slug}`}>
        <a className="absolute inset-0"></a>
      </Link>
      <article className="relative">
        {featured && (
          <>
            <Link href={`/posts/${slug}`}>
              <a className="overflow-hidden h-80 relative block">
                <Image
                  src={defaultThumbnail}
                  alt="Blog Post Thumbnail"
                  className="rounded-md"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
            <div className="text-red-600 text-xl font-bold mt-3">FEATURED</div>
          </>
        )}
        <Link href={`/posts/${slug}`}>
          <a>
            <h2
              className={`text-${
                featured ? "4" : "2"
              }xl font-bold hover:text-red-600`}
            >
              {title}
            </h2>
            <p className={`mt-2 ${featured ? "text-xl" : ""}`}>{excerpt}</p>
          </a>
        </Link>
        <span className="text-sm text-gray-500 font-normal mt-2 uppercase">
          {moment(date).fromNow()}
        </span>
        <div className="flex gap-2 flex-wrap mt-2">
          {tags.map((tag) => (
            <Tag name={tag} key={tag} variant={featured ? "big" : ""} />
          ))}
        </div>
      </article>
    </Panel>
  );
}
