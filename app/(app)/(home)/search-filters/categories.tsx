// Mark as client component - this component uses React features on the client side
"use client";

// Import Category type from Payload CMS types
import { Category } from "@/payload-types";
// Import CategoryDropdown component for rendering each category
import { CategoryDropdown } from "./category-dropdown";

// Define props interface for the Categories component
interface Props {
  // Array of category objects fetched from backend/CMS
  data: Category[];
}

// Categories component - main container that renders a list of category dropdowns
export const Categories = ({ data }: Props) => {
  return (
    // Flex container with gap spacing and wrap behavior for responsive layout
    <div className="flex gap-4 flex-wrap">
      {/* Map through each category from the data array */}
      {data.map((category) => {
        // Get subcategories array, or empty array if undefined (using nullish coalescing)
        const subcategories = category.subcategories ?? [];

        return (
          // Wrapper div for each category - needs key for React list rendering
          <div key={category.id}>
            {/* CategoryDropdown component - renders a single category button with subcategory menu */}
            <CategoryDropdown
              // Pass the category object containing name, slug, color, etc.
              category={category}
              // Set isActive to false (can be modified for current category highlighting)
              isActive={false}
              // Set isNavigationHovered to false (hover state from parent navigation)
              isNavigationHovered={false}
              // Pass subcategories array to the dropdown
              subcategories={subcategories}
            />
          </div>
        );
      })}
    </div>
  );
};
