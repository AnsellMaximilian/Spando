import PostLink from "./PostLink";

export default function PostLinkList({ posts, listTitle, listItemClasses }) {
  return (
    <article>
      <h3 className="text-xl font-bold p-4 border-b border-gray-200">
        {listTitle}
      </h3>
      <div className="grid grid-cols-12">
        {posts.map((post) => {
          return (
            <div key={post.sys.id} className={listItemClasses}>
              <PostLink post={post} />
            </div>
          );
        })}
      </div>
    </article>
  );
}
