import Link from "next/link";

export default function MobileMenu(props: any) {
  return (
    <div className="absolute z-50 left-0 top-20 right-10 bg-slate-100 text-black w-screen border-b border-gray-400 border-t border-gray-400">
      <ul
        className="flex flex-col items-center gap-5 text-xl py-5"
        onClick={props.toggleMenu}
      >
        <Link href="/">Home</Link>
        <Line />
        <Link href="/prep">Preparation</Link>
        <Line />
        <Link href="/prices">Prices</Link>
        <Line />
        <Link href="/gallery">Gallery</Link>
        <Line />
        <Link href="/shop">Shop</Link>
        <Line />
        <Link href="/contact">Contact</Link>
      </ul>
    </div>
  );
}

function Line() {
  return <span className="line bg-gray-400"></span>;
}
