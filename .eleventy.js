var slugify = require('slugify')
const { DateTime } = require("luxon");
// const Image = require("@11ty/eleventy-img");



// async function imageShortcode(src, alt) {
//   let metadata = await Image(src, {
//     widths: [300, 600],
//     formats: ["jpg"],
//     outputDir: "./dist/img"
//   });

//   let imageAttributes = {
//     alt,
//     sizes: [500, 1000],
//     loading: "lazy",
//     decoding: "async",
//   };

//   // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
//   return Image.generateHTML(metadata, imageAttributes);
// }

module.exports = function (eleventyConfig) {
  // eleventyConfig.addWatchTarget(".src/js/app.js");

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy({"src/favicons": '.'});
  // eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  // eleventyConfig.addLiquidShortcode("image", imageShortcode);
  // eleventyConfig.addJavaScriptFunction("image", imageShortcode);
  eleventyConfig.addFilter("formatDate", function(dateObj) {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    passthroughFileCopy: true,
  }; 
};

