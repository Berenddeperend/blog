const ghpages = require("gh-pages");

console.log('dont forget to run \'npm run build\' first.')

ghpages.publish(
  "dist",
  {
    repo: "https://github.com/Berenddeperend/blog.git",
    branch: "gh-pages",
  },
  function (err) {
    if(err) {
      console.log(err)
    } else {
      console.log("uploaded succesful.");
    }
  }
);
