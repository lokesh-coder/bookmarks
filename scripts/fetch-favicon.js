async function fetchFavicon(url) {
  const getWebsiteFavicon = require("get-website-favicon");
  try {
    await getWebsiteFavicon(url);
    return data.icons.find(i => i.src).src;
  } catch (e) {
    return "";
  }
}

export default fetchFavicon;
