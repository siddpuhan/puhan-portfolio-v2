import "server-only";
import { createClient, type ClientConfig, type QueryParams } from "next-sanity";
import { projectId, dataset, apiVersion, token, mode } from "@/lib/env.api";

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: mode === "development" ? true : false,
  ignoreBrowserTokenWarning: true,
  token,
  perspective: "published",
};

// Only create the client when Sanity is properly configured
const client = projectId ? createClient(config) : null;

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  // When Sanity is not configured, return empty data so the UI still renders.
  // All components already handle empty arrays / null profiles gracefully.
  if (!projectId || !dataset) {
    // Heuristic: GROQ queries that end with [0] fetch a single item
    const isSingleItem = query.includes("[0]");
    return (isSingleItem ? null : []) as QueryResponse;
  }

  try {
    return client!.fetch<QueryResponse>(query, qParams, {
      cache: mode === "development" ? "no-store" : "force-cache",
      next: { tags },
    });
  } catch (error) {
    console.error("[Sanity] Fetch failed, returning empty data:", error);
    const isSingleItem = query.includes("[0]");
    return (isSingleItem ? null : []) as QueryResponse;
  }
}
