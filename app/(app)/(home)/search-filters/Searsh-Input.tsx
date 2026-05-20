// Import SearchIcon from lucide-react icon library
import { SearchIcon } from "lucide-react";
// Import custom Input component from UI library
import { Input } from "@/components/ui/input";

// Define props interface for the SearchInput component
interface Props {
  // Optional boolean to disable the input field
  disabled?: boolean;
}

// SearchInput component - renders a search bar with an icon
export const SearchInput = ({ disabled }: Props) => {
  return (
    // Outer flex container for layout alignment
    <div className="flex items-center gap-2 w-full">
      {/* Relative positioned container for icon and input alignment */}
      <div className="relative w-full">
        {/* Search icon - positioned absolutely inside the input */}
        <SearchIcon className="absolute left-3 top-1/2 -transform-y-1/2 size-4 text-neutral-500" />
        {/* Input field for product search */}
        <Input
          className="p-8" // Padding to accommodate the icon on the left
          placeholder="Search for products ..." // Placeholder text shown when input is empty
          disabled={disabled} // Disable input if the disabled prop is true
        />
      </div>
    </div>
  );
};
