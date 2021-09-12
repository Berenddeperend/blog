const slugify = require('slugify');
const path = require("path");
const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt) {
  let metadata = await Image(`src/img/${src}`, {
    widths: [1000],
    formats: ["jpg", null],
    outputDir: "./dist/img",
    urlPath: '/img/',
    filenameFormat: function (id, src, width, format, options) {
      const target = src.split('/').filter((e,i) => i > 1).join('/');
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      // return target;
      return `${name}.${format}`;
    },
    sharpJpegOptions: {
      quality: 60
    },
    sharpPngOptions: {
      quality: 60
    },
  });

  let imageAttributes = {
    alt,
    sizes: [1000],
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  // eleventyConfig.addWatchTarget(".src/js/app.js");

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy({"src/favicons": '.'});
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);
  eleventyConfig.addFilter("formatDate", function(dateObj) {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    passthroughFileCopy: true,
  }; 
};

