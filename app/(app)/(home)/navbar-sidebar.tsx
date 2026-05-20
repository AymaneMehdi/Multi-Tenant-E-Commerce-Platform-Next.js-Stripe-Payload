// Import Sheet components from UI library - creates a slide-out drawer panel
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
// Import ScrollArea component for scrollable content within the sheet
import { ScrollArea } from "@/components/ui/scroll-area";
// Import Link for client-side navigation
import Link from "next/link";

// Define interface for individual navbar items
interface NavbarItem {
  // URL path for the link
  href: string;
  // React content to display (text, components, etc.)
  children: React.ReactNode;
}

// Define props interface for the NavbarSidebar component
interface Props {
  // Array of navigation items to display in the sidebar
  items: NavbarItem[];
  // Boolean state controlling whether the sidebar is open or closed
  open: boolean;
  // Callback function triggered when sidebar open state should change
  onOpenChange: (open: boolean) => void;
}

// NavbarSidebar component - renders a responsive mobile menu drawer
export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  return (
    // Sheet component - creates a drawer/modal from UI library
    <Sheet open={open} onOpenChange={onOpenChange}>
      {/* SheetContent - the actual drawer panel that slides in from the left */}
      <SheetContent side="left" className="p-0 transition-none">
        {/* Header section of the sidebar */}
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            {/* Title displayed at the top of the sidebar */}
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>

        {/* ScrollArea - makes the content scrollable if it exceeds container height */}
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {/* Map through navigation items and render a link for each */}
          {items.map((item) => (
            <Link
              // Use href as unique key for React list rendering
              key={item.href}
              // Navigation destination
              href={item.href}
              // Styling: full width, left-aligned text, padding, hover effects
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
            >
              {/* Display the item's content (text label) */}
              {item.children}
            </Link>
          ))}

          {/* Authentication section - separated by a top border */}
          <div className="border-t">
            {/* Sign in link */}
            <Link
              href="/sign-in"
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
            >
              Log in
            </Link>

            {/* Start Selling link - for sellers/vendors */}
            <Link
              href="/sign-up"
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
            >
              Start Selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
