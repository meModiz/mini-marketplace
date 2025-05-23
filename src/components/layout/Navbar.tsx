"use client";
import Link from "next/link";
import ThemeToggle from "@/components/layout/ThemeToggler";
import Authentication from "@/components/layout/AuthenticationIcon";
import { usePathname } from "next/navigation";
import Logo from "../common/Logo";

export default function Navbar() {
  const pathname = usePathname();

  if (pathname == "/signin" || pathname == "/signup") {
    return null;
  }
  return (
    <div className="flex flex-row w-full justify-between items-center px-80 py-3">
      <Logo />
      <nav className="p-4">
        <ul className="flex gap-4 text-sm font-medium text-gray-700 dark:text-gray-200">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/marketplace?category=all_products">Marketplace</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row items-center gap-2">
        <Authentication />
        <ThemeToggle />
      </div>
    </div>
  );
}
