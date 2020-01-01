const tailwindcss = require("tailwindcss");
const production = !process.env.ROLLUP_WATCH;

// only needed if you want to purge
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.html", "./src/**/*.svelte"],

  whitelistPatterns: [/svelte-/],

  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),

    // only needed if you want to purge
    ...(production ? [purgecss] : [])
  ]
};
