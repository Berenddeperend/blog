const ghpages = require("gh-pages");
ghpages.publish(
  "dist",
  {
    repo: "https://github.com/Berenddeperend/blog.git",
    branch: "dist",
  },
  function (err) {
    if(err) {
      console.log(err)
    } else {
      console.log("uploaded succesful.");
    }
  }
);
