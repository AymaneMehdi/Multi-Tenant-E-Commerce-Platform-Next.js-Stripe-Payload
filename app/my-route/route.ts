// Import Payload CMS configuration
import configPromise from "@payload-config";
// Import getPayload function to access Payload CMS database
import { getPayload } from "payload";

// GET endpoint - handles HTTP GET requests to this route (/api/my-route)
// This is a Next.js API route handler (Route Handler in App Router)
export const GET = async () => {
  // Initialize Payload CMS instance with configuration
  const payload = await getPayload({
    config: configPromise,
  });

  // Query the 'categories' collection to fetch all categories from the database
  const data = await payload.find({
    collection: "categories",
    // No filter conditions - fetches all categories
  });

  // Return the fetched data as JSON response to the client
  return Response.json(data);
};
