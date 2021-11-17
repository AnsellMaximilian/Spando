import Link from "next/link";
import BrandSVG from "./BrandSVG";
import Search from "./Search";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

export default function Header({ home, posts, tags }) {
  return (
    <header className="shadow-md">
      <nav className="flex container mx-auto p-4 items-center">
        <Link href="/">
          <a className="flex items-center">
            <BrandSVG />
            {/* <span className="ml-2 font-bold text-xl">Spando</span> */}
          </a>
        </Link>
        <ul className="flex items-center ml-3">
          {/* <li className="ml-3 text-gray-600 hover:text-black">
            <Link href="/">
              <a className={home ? "text-black font-semibold" : ""}>Home</a>
            </Link>
          </li> */}
          {/* <li className="ml-3 text-gray-600 hover:text-black">
            <Link href="/posts">
              <a className={posts ? "text-black font-semibold" : ""}>Posts</a>
            </Link>
          </li> */}
          {/* <li className="ml-3 text-gray-600 hover:text-black">
            <Link href="/tags">
              <a className={tags ? "text-black font-semibold" : ""}>Tags</a>
            </Link>
          </li> */}
        </ul>
        <div className="ml-auto flex items-center">
          <div className="mr-3">
            <FaRegBookmark className="hover:text-red-600" title="Saved posts" />
          </div>
          <div className="hidden md:block">
            <Search />
          </div>
        </div>
      </nav>
    </header>
  );
}
