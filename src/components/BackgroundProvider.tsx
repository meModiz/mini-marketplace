"use client";
import { usePathname } from "next/navigation";
export default function BackgroundProvider({ children }: { children: any }) {
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  return (
    <div
      className={`${
        isMainPage
          ? "bg-lightGradient dark:bg-darkGradient"
          : "bg-white dark:bg-gray-800"
      }`}
    >
      {children}
    </div>
  );
}
