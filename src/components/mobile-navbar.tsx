"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutDashboard, User } from "lucide-react";

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#0F1334] shadow-md z-50">
      <ul className="flex justify-around items-center p-4">
        {/* Accueil */}
        <li>
          <Link href="/dashboard" className="flex flex-col items-center">
            <Home
              className={`size-6 ${
                pathname === "/dashboard" ? "text-fluo-green" : "text-white"
              }`}
            />
          </Link>
        </li>

        {/* Recherche */}
        <li>
          <Link href="/search" className="flex flex-col items-center">
            <LayoutDashboard
              className={`size-6 ${
                pathname === "/search" ? "text-fluo-green" : "text-white"
              }`}
            />
          </Link>
        </li>

        {/* Profil */}
        <li>
          <Link href="/profile" className="flex flex-col items-center">
            <User
              className={`size-6 ${
                pathname === "/profile" ? "text-fluo-green" : "text-white"
              }`}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
