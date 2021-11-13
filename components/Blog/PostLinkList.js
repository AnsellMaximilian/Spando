import PostLink from "./PostLink";

export default function PostLinkList({ posts, listTitle, listItemClasses }) {
  return (
    <article>
      <h3 className="text-xl font-semibold p-4 pb-0">{listTitle}</h3>
      <div className="mt-2 grid grid-cols-12">
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
