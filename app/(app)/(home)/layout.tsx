// Import Navbar component
import Navbar from "./navbar";
// Import Footer component
import Footer from "./footer";
// Import SearchFilters component (contains search input and category filters)
import { SearchFilters } from "./search-filters";
// Import Payload CMS function to access database/collections
import { getPayload } from "payload";
// Import Payload CMS configuration
import configPromise from "@payload-config";
// Import Category type from Payload generated types
import { Category } from "@/payload-types";

// Define props interface for layout component
interface Props {
  // React children - page content that will be rendered inside this layout
  children: React.ReactNode;
}

// Layout component - server component (marked async) that wraps the home page
// This component fetches categories from CMS and provides them to child components
const Layout = async ({ children }: Props) => {
  // Initialize Payload CMS instance with configuration
  const payload = await getPayload({
    config: configPromise,
  });

  // Fetch all parent categories (categories without a parent) from the CMS
  const data = await payload.find({
    collection: "categories", // Query the categories collection
    depth: 1, // Include one level of nested data (subcategories)
    pagination: false, // Fetch all results without pagination
    where: {
      parent: {
        exists: false, // Only get top-level categories (no parent)
      },
    },
  });

  // Transform the fetched data to flatten the structure for easier UI consumption
  const formattedData = data.docs.map((doc) => ({
    // Spread all category properties (id, name, slug, color, etc.)
    ...doc,
    // Transform subcategories array to avoid nested docs structure
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      // Spread subcategory properties
      ...(doc as Category),
      // Remove nested subcategories to avoid deep nesting
      subcategories: undefined,
    })),
  }));

  return (
    // Main layout container - flex column for vertical stacking, min-h-screen for full height
    <div className="flex flex-col min-h-screen">
      {/* Navigation bar at the top */}
      <Navbar />
      {/* Search filters section with categories - passes formatted category data */}
      <SearchFilters data={formattedData} />
      {/* Main content area - flex-1 to take up remaining vertical space */}
      <div className="flex-1">{children}</div>
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

// Export layout as default for Next.js routing
export default Layout;
