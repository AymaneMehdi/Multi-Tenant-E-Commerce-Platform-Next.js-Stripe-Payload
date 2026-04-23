"use client";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      className={cn(
        "bg-[#FF6678] rounded-full border-transparent px-3.5 text-lg hover:bg-black hover:text-white",
        isActive && "bg-[#f3273f] text-white hover:bg-black hover:text-white",
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  {
    href: "/",
    children: "Home",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/features",
    children: "Features",
  },
  {
    href: "/pricing",
    children: "Pricing",
  },
  {
    href: "/contact",
    children: "Contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <nav className="h-20 flex border-b justify-between font-meduim bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          Logo
        </span>
      </Link>

      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
      <div className="hidden lg:flex">
        <button className="border-l border-t-0 border-r-0 border-b-0 px-12 h-full rounded-none bg-white hover:bg-[#FF6678] transition-colors text-lg">
          <Link href="/sign-in">Log in</Link>
        </button>
        <button className="border-t-0 border-r-0 border-b-0 px-12 h-full rounded-none bg-black text-white hover:bg-[#FF6678] hover:text-black transition-colors text-lg">
          <Link href="/sign-up">Start Selling</Link>
        </button>
      </div>

      <div className="flex lg:hidden items-center justify-center pr-4">
        <Button
          variant="default"
          className="size-10 sm:size-11 border-transparent bg-[#FF6678] hover:bg-[#FF6678]"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon className="size-5 sm:size-6" />
        </Button>
      </div>
    </nav>
  );
}
