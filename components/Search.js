import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Search() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    router.push(`/posts/search?q=${query}`);
  };
  return (
    <form onSubmit={onSubmit} className="relative rounded-md group">
      <input
        className={`border group-hover:border-red-600 ${
          isFocused ? "border-red-600" : "border-gray-400"
        } py-1 pl-2 pr-8 rounded-md outline-none`}
        style={isFocused ? { boxShadow: "0 0 0 1px rgba(220, 38, 38, 1)" } : {}}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for posts..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button
        className={`absolute right-0 px-4 h-full hover:bg-gray-200 bg-gray-100 ${
          isFocused ? "border-red-600" : "border-gray-400"
        } rounded-md border group-hover:border-red-600`}
        style={isFocused ? { boxShadow: "0 0 0 1px rgba(220, 38, 38, 1)" } : {}}
      >
        <FaSearch />
      </button>
    </form>
  );
}
