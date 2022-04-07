import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Search({ fullWidth }) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    if (query) router.push(`/posts/search?q=${query}`);
  };
  return (
    <form
      onSubmit={onSubmit}
      className={`relative rounded-md group inline-block ${
        fullWidth ? "w-full" : ""
      }`}
    >
      <input
        className={`border group-hover:border-gray-400 border-gray-300 py-1 pl-2 pr-8 rounded-md outline-none w-full focus:ring-2 ring-primary`}
        // style={
        //   isFocused
        //     ? {
        //         boxShadow: "0 0 0 1px rgba(220, 38, 38, 1)",
        //         borderColor: "rgba(220, 38, 38, 1)",
        //       }
        //     : {}
        // }
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for posts..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button
        className={`absolute right-0 px-3 h-full rounded-md hover:text-primary`}
      >
        <FaSearch />
      </button>
    </form>
  );
}
