import PostLink from "./PostLink";

export default function PostLinkList({ posts, listTitle }) {
  return (
    <article>
      <h3 className="text-xl font-semibold">{listTitle}</h3>
      <div className="mt-2 grid grid-cols-12">
        {posts.map((post) => {
          return <PostLink post={post} key={post.sys.id} />;
        })}
      </div>
    </article>
  );
}
