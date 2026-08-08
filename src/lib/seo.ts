export const SITE_URL = "https://www.viconnect.rw";
export const SITE_NAME = "VI CONNECT NETWORKSERVICES LTD";
export const DEFAULT_IMAGE = "https://www.viconnect.rw/favicon.jpeg";
export const DEFAULT_IMAGE_ALT = "VI CONNECT electronics and technology store in Kigali Rwanda";

interface PageHeadOptions {
  title: string;
  description: string;
  pathname: string;
  image?: string;
  imageAlt?: string;
}

export function createPageHead({
  title,
  description,
  pathname,
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
}: PageHeadOptions) {
  const href = `${SITE_URL}${pathname}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index,follow" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: href },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:creator", content: "@VICONNECTRW" },
    ],
    links: [{ rel: "canonical", href }],
  };
}
