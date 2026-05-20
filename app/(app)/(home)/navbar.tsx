// Mark as client component - uses React hooks (useState, usePathname)
"use client";

// Import Link for Next.js client-side navigation
import Link from "next/link";
// Import Poppins font from Google Fonts
import { Poppins } from "next/font/google";
// Import utility function for conditional class names
import { cn } from "@/lib/utils";
// Import Button component from UI library
import { Button } from "@/components/ui/button";
// Import usePathname hook to get current route path
import { usePathname } from "next/navigation";
// Import NavbarSidebar component for mobile menu
import { NavbarSidebar } from "./navbar-sidebar";
// Import useState hook for managing state
import { useState } from "react";
// Import MenuIcon from lucide-react for hamburger menu
import { MenuIcon } from "lucide-react";

// Configure Poppins font with bold weight for logo
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"], // Bold weight for emphasis
});

// Define props interface for individual navbar items
interface NavbarItemProps {
  // URL path for navigation
  href: string;
  // Content to display in the item
  children: React.ReactNode;
  // Optional flag to highlight active/current page
  isActive?: boolean;
}

// NavbarItem component - renders a styled button for each navigation link
const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      className={cn(
        // Base styles: padding, text size, white background with border, hover effect
        "px-3.5 text-lg bg-white border hover:bg-black hover:text-white",
        // If active, use pink background instead of white
        isActive && "bg-[#FF6678] text-black hover:bg-black hover:text-white",
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

// Array of navigation menu items displayed in the navbar
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

// Main Navbar component
export default function Navbar() {
  // Get current pathname to determine which nav item is active
  const pathname = usePathname();
  // State to control mobile sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // Main navbar container - flex layout, fixed height, white background with bottom border
    <nav className="h-20 flex border-b justify-between font-meduim bg-white">
      {/* Logo/Brand section on the left */}
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          Logo
        </span>
      </Link>

      {/* Mobile sidebar menu component - always present but hidden on desktop */}
      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      {/* Desktop navigation items - only visible on large screens (lg breakpoint) */}
      <div className="items-center gap-4 hidden lg:flex">
        {/* Map through navbar items and render each as a NavbarItem button */}
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            // Mark item as active if its href matches current pathname
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      {/* Desktop authentication buttons section - only visible on large screens */}
      <div className="hidden lg:flex">
        {/* Log in button - white background with pink hover */}
        <button className="border-l border-t-0 border-r-0 border-b-0 px-12 h-full rounded-none bg-white hover:bg-[#FF6678] transition-colors text-lg">
          <Link href="/sign-in">Log in</Link>
        </button>
        {/* Start Selling button - black background with pink hover */}
        <button className="border-t-0 border-r-0 border-b-0 px-12 h-full rounded-none bg-black text-white hover:bg-[#FF6678] hover:text-black transition-colors text-lg">
          <Link href="/sign-up">Start Selling</Link>
        </button>
      </div>

      {/* Mobile hamburger menu button - only visible on small/medium screens (hidden on lg+) */}
      <div className="flex lg:hidden items-center justify-center pr-4">
        <Button
          variant="default"
          className="size-10 sm:size-11 border-transparent bg-[#FF6678] hover:bg-[#FF6678]"
          // Trigger sidebar open when menu button is clicked
          onClick={() => setIsSidebarOpen(true)}
        >
          {/* Hamburger menu icon */}
          <MenuIcon className="size-5 sm:size-6" />
        </Button>
      </div>
    </nav>
  );
}
