async function fetchMeta(url) {
  const { getMetadata } = require("page-metadata-parser");
  const domino = require("domino");
  const fetch = require("node-fetch");

  const response = await fetch(url);
  const html = await response.text();
  const doc = domino.createWindow(html).document;
  const metadata = getMetadata(doc, url);
  return metadata;
}

module.exports = fetchMeta;
