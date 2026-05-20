// Import SearchInput component for product search functionality
import { SearchInput } from "./Searsh-Input";
// Import Categories component for displaying product categories
import { Categories } from "./categories";

// Define props interface for the SearchFilters component
interface Props {
  // Array of category data fetched from the backend/CMS
  data: any; // TODO: Replace with proper CategoryWithSubcategories type
}

// SearchFilters component - main container for search and category filter section
export const SearchFilters = ({ data }: Props) => {
  return (
    // Main container with horizontal padding, vertical padding, bottom border, and white background
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full bg-white">
      {/* SearchInput component - allows users to search for products */}
      <SearchInput />
      {/* Categories component - displays category buttons and dropdown filters */}
      {/* Passes the category data from parent layout component */}
      <Categories data={data} />
    </div>
  );
};
