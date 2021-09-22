import BrandSVG from "./BrandSVG";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4 mt-16 bg-gray-100">
      <div className="container mx-auto px-4 grid grid-cols-12 gap-4">
        <header className="col-span-12"></header>
        <section className="col-span-12 md:col-span-6">
          <Link href="/">
            <a>
              <BrandSVG />
            </a>
          </Link>
          <p className="mt-4">
            This is a blog created by Ansell Maximilian as a personal project to
            share his experiences in learning Spanish as a beginner to share to
            those in the same situation.
          </p>
        </section>
        <section className="col-span-6 md:col-span-3">
          <div className="font-bold text-sm">LINKS</div>
          <ul className="mt-2">
            <li className="">Home</li>
            <li className="mt-1">Home</li>
            <li className="mt-1">Home</li>
          </ul>
        </section>

        <section className="col-span-6 md:col-span-3">
          <div className="font-bold text-sm">ANSELL MAXIMILIAN</div>
          <ul className="mt-2">
            <li className="">Home</li>
            <li className="mt-1">Home</li>
            <li className="mt-1">Home</li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
