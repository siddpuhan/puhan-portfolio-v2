export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const dataset: string =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "";

export const token =
  process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN || "";

export const hookSecret = process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET;
export const mode = process.env.NODE_ENV;

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-07-21";

// Whether Sanity is properly configured
export const isSanityConfigured = projectId !== "" && dataset !== "";

export const giscusRepoId =
  process.env.NEXT_PUBLIC_GISCUS_REPOID || "";

export const giscusCategoryId =
  process.env.NEXT_PUBLIC_GISCUS_CATEGORYID || "";

export const umamiSiteId =
  process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || "";

// Validate env varaibles
function checkValue<T>(
  value: T | undefined,
  errorMsg: string,
  url?: string
): T {
  if (value === undefined) {
    throw new Error(
      `Missing Environment Variable: ${errorMsg}\n\nVist ${url} to learn how you can generate your own API keys`
    );
  }
  return value;
}
