"use client";

import ModeToggle from "@/components/shared/mode-toggle";
import { navLinks } from "@/constants";
import Link from "next/link";
import GlobalSearch from "./GlobalSearch";
import { usePathname } from "next/navigation";
import HamburgeMenu from "./mobile";

const Navbar = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="backdrop-blur-sm border-b fixed z-40 inset-0 bg-background h-[10vh]">
      <div className="container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-creteRound">Sammi</h1>
        </Link>

        {/* NavLinks */}
        <div className="gap-2 hidden md:flex">
          {navLinks.map((nav) => (
            <Link
              href={nav.route}
              key={nav.name}
              className={`hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors ${
                pathname === nav.route && "text-blue-400 bg-blue-400/20"
              }`}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center gap-1">
          <GlobalSearch />

          {/* Mod Toggle */}
          <ModeToggle />

          <HamburgeMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
