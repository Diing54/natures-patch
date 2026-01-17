import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false, 
});

// Add this helpful "Fetch" wrapper
export async function sanityFetch({ query, tags }) {
  return client.fetch(query, {}, {
    next: { 
      revalidate: 60, // Check for new data every 60 seconds
      tags 
    }, 
  });
}
