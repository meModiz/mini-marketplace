// Navigation bar component

import Link from "next/link";
import ThemeToggle from "@/app/utils/ThemeToggler";

export default function Navbar() {
  return (
    <div className="flex flex-row w-full justify-between items-center">
      <span>COMPANY LOGO</span>
      <nav className="p-4">
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
      </nav>
      <ThemeToggle />
    </div>
  );
}
