// Mark as client component - this component uses React hooks (useState, useRef)
"use client";

// Import Link for navigation
import Link from "next/link";
// Import React hooks for state and DOM reference management
import { useRef, useState } from "react";

// Import utility function for conditional class names
import { cn } from "@/lib/utils";
// Import custom Button component from UI library
import { Button } from "@/components/ui/button";

// Import category types from modules
import { CategoriesGetManyOutput } from "@/modules/categories/types";

// Import SubcategoryMenu component to display subcategories dropdown
import { SubcategoryMenu } from "./subcategory-menu";

// Define props interface for the CategoryDropdown component
interface Props {
  // The category object containing name, slug, and subcategories
  category: CategoriesGetManyOutput[1];
  // Optional boolean to indicate if this category is currently active
  isActive?: boolean;
  // Optional boolean to indicate if the navigation area is being hovered
  isNavigationHovered?: boolean;
}

// CategoryDropdown component - renders a category button with hover-triggered subcategory menu
export const CategoryDropdown = ({
  category,
  isActive,
  isNavigationHovered,
}: Props) => {
  // State to track whether the subcategory menu is open or closed
  const [isOpen, setIsOpen] = useState(false);
  // Ref to access the dropdown container DOM element
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handler when mouse enters the dropdown - opens submenu if subcategories exist
  const onMouseEnter = () => {
    if (category.subcategories) {
      console.log("hello"); // Debug log
      setIsOpen(true); // Show subcategory menu
    }
  };

  // Handler when mouse leaves the dropdown - closes the submenu
  const onMouseLeave = () => setIsOpen(false);

  return (
    // Main dropdown container with relative positioning for absolute positioning of children
    <div
      className="relative"
      ref={dropdownRef} // Attach ref to this element
      onMouseEnter={onMouseEnter} // Trigger menu open on hover
      onMouseLeave={onMouseLeave} // Trigger menu close when leaving
    >
      {/* Inner relative container for positioning the arrow indicator */}
      <div className="relative">
        {/* Category button with dynamic styling */}
        <Button
          variant="elevated"
          className={cn(
            // Base styles: height, padding, transparent background, rounded pill shape, text color
            "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black",
            // Apply white background and border when category is active AND navigation is not hovered
            isActive && !isNavigationHovered && "bg-white border-primary",
            // Apply shadow and transform when menu is open
            isOpen &&
              "bg-white border-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[4px] -translate-y-[4px]",
          )}
        >
          {/* Link to navigate to the category page */}
          <Link href={`/${category.slug === "all" ? "" : category.slug}`}>
            {category.name}
          </Link>
        </Button>

        {/* Decorative arrow indicator - shows only if subcategories exist and menu is open */}
        {category.subcategories && category.subcategories.length > 0 && (
          <div
            className={cn(
              // Create a triangle using CSS borders - hidden by default
              "opacity-0 absolute -bottom-3 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-black left-1/2 -translate-x-1/2",
              // Show the arrow when menu is open
              isOpen && "opacity-100",
            )}
          />
        )}
      </div>

      {/* Subcategory menu component - displayed below the category button when open */}
      <SubcategoryMenu category={category} isOpen={isOpen} />
    </div>
  );
};
