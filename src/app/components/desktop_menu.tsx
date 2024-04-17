import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopMenu() {
  const pathname = usePathname();
  const mainColour = "bg-red-200";

  const activePageClassName = `text-black border ${mainColour} border-black shadow-offset-black`;

  return (
    <div className="desktop-menu flex items-center hidden xl:flex">
      <ul className="flex gap-10 items-center justify-center">
        <Link href="/">
          <button
            className={`px-6 py-2 hover:text-rose-700 ${
              pathname === "/" ? activePageClassName : ""
            }`}
          >
            Home
          </button>
        </Link>
        <Link href="/prep">
          <button
            className={`px-6 py-2 hover:text-rose-700 ${
              pathname === "/prep" ? activePageClassName : ""
            }`}
          >
            Preparation
          </button>
        </Link>
        <Link href="/gallery">
          <button
            className={`px-6 py-2 hover:text-purple-700 ${
              pathname === "/gallery" ? activePageClassName : ""
            }`}
          >
            Gallery
          </button>
        </Link>
        <Link href="/prices">
          <button
            className={`px-6 py-2 hover:text-purple-700 ${
              pathname === "/prices" ? activePageClassName : ""
            }`}
          >
            Prices
          </button>
        </Link>
        <Link href="/forsale">
          <button
            className={`px-6 py-2 hover:text-purple-700 ${
              pathname === "/forsale" ? activePageClassName : ""
            }`}
          >
            For Sale
          </button>
        </Link>
        <Link href="/links">
          <button
            className={`px-6 py-2 hover:text-purple-700 ${
              pathname === "/links" ? activePageClassName : ""
            }`}
          >
            Links
          </button>
        </Link>
      </ul>
    </div>
  );
}
