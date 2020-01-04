async function fetchFavicon(url) {
  const getWebsiteFavicon = require("get-website-favicon");
  try {
    const data = await getWebsiteFavicon(url);
    return data.icons.find(i => i.src).src;
  } catch (e) {
    return "";
  }
}

module.exports = fetchFavicon;
