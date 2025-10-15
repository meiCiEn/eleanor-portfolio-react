import { useEffect } from "react";
import siteMeta from "../../data/siteMeta";

/**
 * Usage:
 * <Seo title="Projects – Eleanor" description="Selected frontend projects." path="/projects" />
 * - title, description: per-page overrides
 * - path: appended to your siteUrl to set canonical & og:url (e.g. "/projects")
 */
export default function Seo({ title, description, image, path = "" }) {
  const {
    siteName,
    defaultTitle,
    defaultDescription,
    siteUrl,
    ogImage,
  } = siteMeta;

  const finalTitle = title || defaultTitle;
  const finalDesc = description || defaultDescription;
const toAbs = (u) =>
  /^https?:\/\//.test(u) ? u : `${siteUrl.replace(/\/$/, "")}/${String(u).replace(/^\//, "")}`;

const url        = toAbs(path || "/");
const finalImage = toAbs(image || ogImage);

  useEffect(() => {
    document.title = finalTitle;
    setMeta("name", "description", finalDesc);
    setLink("canonical", url);

    setMeta("property", "og:title", finalTitle);
    setMeta("property", "og:description", finalDesc);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", finalImage);

    setMeta("name", "twitter:title", finalTitle);
    setMeta("name", "twitter:description", finalDesc);
    setMeta("name", "twitter:image", finalImage);
  }, [finalTitle, finalDesc, url, finalImage]);

  return null;
}

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}
