// Navigation bar component

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggler";

export default function Navbar() {
  return (
    <div className="flex flex-row w-full justify-between items-center px-80 py-3">
      <span>COMPANY LOGO</span>
      <nav className="p-4">
        <ul className="flex gap-4 text-sm font-medium text-gray-700 dark:text-gray-200">
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
      </nav>
      <ThemeToggle />
    </div>
  );
}
