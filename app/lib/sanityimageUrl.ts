import ImageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = ImageUrlBuilder(client);

interface SanityImageSource {
  asset: {
    _ref: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}