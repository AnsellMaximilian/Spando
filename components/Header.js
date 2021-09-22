import Link from "next/link";
import BrandSVG from "./BrandSVG";

export default function Header({ home }) {
  return (
    <header className="shadow-md">
      <nav className="flex container mx-auto p-4">
        <Link href="/">
          <a>
            <BrandSVG />
          </a>
        </Link>
        <ul className="flex items-center ml-3">
          <li className="ml-3 text-gray-600 hover:text-black">
            <Link href="/">
              <a className={home ? "text-black font-semibold" : ""}>Home</a>
            </Link>
          </li>
          <li className="ml-3 text-gray-600 hover:text-black">
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
