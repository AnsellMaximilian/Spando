import Tag from "./Tag";

export default function PostCard({ title, excerpt, date, tags }) {
  return (
    <article className="w-full md:w-80 lg:w-96 bg-gray-50 p-4 shadow-md hover:bg-gray-100 rounded-sm">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2">{excerpt}</p>
      <span className="text-sm text-gray-500 font-normal mt-2 uppercase">
        {date}
      </span>
      <div className="flex gap-2 flex-wrap mt-2">
        {tags.map((tag) => (
          <Tag name={tag} key={tag} />
        ))}
      </div>
    </article>
  );
}
