import Link from "next/link";
import BrandSVG from "./BrandSVG";
import Search from "./Search";

export default function Header({ home, posts }) {
  return (
    <header className="shadow-md">
      <nav className="flex container mx-auto p-4 items-center">
        <Link href="/">
          <a>
            <BrandSVG />
          </a>
        </Link>
        <ul className="flex items-center ml-3">
          {/* <li className="ml-3 text-gray-600 hover:text-black">
            <Link href="/">
              <a className={home ? "text-black font-semibold" : ""}>Home</a>
            </Link>
          </li> */}
          <li className="ml-3 text-gray-600 hover:text-black">
            <Link href="/posts">
              <a className={posts ? "text-black font-semibold" : ""}>Posts</a>
            </Link>
          </li>
        </ul>
        <div className="ml-auto">
          <Search />
        </div>
      </nav>
    </header>
  );
}
