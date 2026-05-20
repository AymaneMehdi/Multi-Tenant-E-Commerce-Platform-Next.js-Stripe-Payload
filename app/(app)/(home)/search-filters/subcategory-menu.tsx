import Link from "next/link";

import { Category } from "@/payload-types";

import { CategoriesGetManyOutput } from "@/modules/categories/types";

// Define props interface for the SubcategoryMenu component
interface Props {
  // The parent category object containing subcategories data
  category: CategoriesGetManyOutput[1];
  // Boolean to control visibility of the menu
  isOpen: boolean;
}

// SubcategoryMenu component - displays a dropdown menu with subcategories
export const SubcategoryMenu = ({ category, isOpen }: Props) => {
  // Early return: don't render if menu is closed, no subcategories exist, or subcategories array is empty
  if (
    !isOpen ||
    !category.subcategories ||
    category.subcategories.length === 0
  ) {
    return null;
  }

  // Get the background color from the category object passed from backend
  const backgroundColor = category.color;

  return (
    // Outer container with absolute positioning - sits below the parent category button
    <div
      className="absolute z-100"
      style={{
        top: "100%", // Position directly below the parent element
        left: 0, // Align to the left edge
      }}
    >
      {/* Invisible bridge div - maintains hover state between button and menu to prevent flickering */}
      <div className="h-3 w-60" />

      {/* Main menu container with background color from category */}
      <div
        style={{ backgroundColor }} // Apply dynamic background color from backend
        className="w-60 text-white rounded-md no-underline overflow-hidden border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[2px] -translate-y-[2px]"
      >
        {/* Inner wrapper for subcategory links */}
        <div>
          {/* Map through subcategories and render a link for each */}
          {category.subcategories?.map((subcategory: Category) => (
            <Link
              key={subcategory.slug} // Unique key for React rendering
              href={`/`} // Navigation link (currently set to home)
              className="w-full text-left p-4 no-underline font-bold hover:bg-black hover:text-white flex justify-between items-center"
            >
              {/* Display subcategory name */}
              {subcategory.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
