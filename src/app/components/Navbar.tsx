// Navigation bar component

import Link from "next/link";
import ThemeToggle from "@/app/utils/ThemeToggler";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/marketplace">Marketplace</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
