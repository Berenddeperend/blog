var slugify = require('slugify')


module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  return {
    passthroughFileCopy: true,
  };
};
