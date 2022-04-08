import React from "react";
import Link from "next/link";
import Tag from "./Tag";

const BrowseByTag = ({ tags }) => {
  return (
    <article className="">
      <header className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-xl font-bold ">Telurusi dari Tag</h3>
        <Link href="/tags">
          <a className="font-semibold hover:text-primary text-sm">Semua tag</a>
        </Link>
      </header>
      <div className="flex flex-wrap gap-2 p-4">
        {tags.slice(0, 8).map((tag) => (
          <Tag key={tag.sys.id} tag={tag} />
        ))}
      </div>
    </article>
  );
};

export default BrowseByTag;
