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
            className={`px-6 py-2 hover:text-rose-700 ${
              pathname === "/gallery" ? activePageClassName : ""
            }`}
          >
            Gallery
          </button>
        </Link>
        <Link href="/prices">
          <button
            className={`px-6 py-2 hover:text-rose-700 ${
              pathname === "/prices" ? activePageClassName : ""
            }`}
          >
            Prices
          </button>
        </Link>
        <Link href="/shop">
          <button
            className={`px-6 py-2 hover:text-rose-700 ${
              pathname === "/shop" ? activePageClassName : ""
            }`}
          >
            Shop
          </button>
        </Link>
        <Link href="/contact">
          <button
            className={`px-6 py-2 hover:text-rose-700 ${
              pathname === "/contact" ? activePageClassName : ""
            }`}
          >
            Contact
          </button>
        </Link>
      </ul>
    </div>
  );
}
