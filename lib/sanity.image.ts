import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./env.api";

const imageBuilder = projectId
  ? imageUrlBuilder({
      projectId,
      dataset: dataset || "production",
    })
  : null;

// Stub builder returned when Sanity is not configured so chained calls don't crash
const stubBuilder = {
  url: () => "",
  width: () => stubBuilder,
  height: () => stubBuilder,
  blur: () => stubBuilder,
  quality: () => stubBuilder,
};

export function urlFor(source: any) {
  if (!imageBuilder) return stubBuilder;
  return imageBuilder.image(source).auto("format").fit("max");
}
