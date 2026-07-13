import { useEffect } from "react";

const SITE_URL = "https://www.rusticfarmvilla.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const setMetaTag = (attr, key, content) => {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const setLinkTag = (rel, href) => {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
};

const setJsonLd = (id, data) => {
  let tag = document.getElementById(id);
  if (!tag) {
    tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.id = id;
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(data);
};

/**
 * Sets per-page title/meta/OG/JSON-LD tags. No react-helmet dependency needed
 * since this is a client-rendered CRA app with no SSR to coordinate with.
 */
const Seo = ({ title, description, path = "/", jsonLd }) => {
  useEffect(() => {
    const fullTitle = `${title} | Rustic Farm Villa`;
    document.title = fullTitle;

    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", `${SITE_URL}${path}`);
    setMetaTag("property", "og:image", DEFAULT_IMAGE);
    setMetaTag("property", "og:type", "website");
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);

    setLinkTag("canonical", `${SITE_URL}${path}`);

    if (jsonLd) {
      setJsonLd("page-jsonld", jsonLd);
    }
  }, [title, description, path, jsonLd]);

  return null;
};

export default Seo;
