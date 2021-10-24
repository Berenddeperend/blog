const slugify = require("slugify");
const { DateTime } = require("luxon");

class Projects {
  data() {
    return {
      title: "Projects",
      layout: "template.njk",
    };
  }

  render(data) {
    return `
    <h1>${data.title} <small>(${this.postCount(data)})</small></h1>

    <div class="taglist">
    <span class="tags-label">Tags:</span>
    ${this.listTags(data)} 
    </div>

    ${this.listPosts(data)}
    `;
  }

  postCount(data) {
    return data.collections.post.length
  }
  
  listPosts(data) {
    function getPostSlug(post) {
        return post.data.url ? slugify(post.data.url.toLowerCase()) : slugify(post.data.title.toLowerCase());
    }
    
    function getPostDate(post) {
        return DateTime.fromJSDate(post.data.date).toLocaleString(DateTime.DATE_MED);
    }
    
    function getPostTags(post) {
        return post.data.tags.filter(d => d!== 'post').join(', ')
    }

    return data.collections.post.map(d => {
        return `
        <article>
        <div class="post-overview-item"
            category="${getPostTags(d)}"
        >
            <a class="post-overview-featured-img-anchor" href="${getPostSlug(d)}">
                <img class="post-overview-featured-img" src="/img/${d.data['featured-img']}" />
            </a>

            <div class="post-overview-item-content">
                <h3 class="post-overview-item-title">
                <a href="${getPostSlug(d)}">${d.data.title}</a>
                </h3>
                  <p class="post-overview-summary">${d.data.summary}</p>
                <p class="post-metadata">${getPostDate(d)}</p>
            </div>
        </div>
        </article>
        `
    })
    .reverse()
    .join('')
  }

  listTags(data) {
    const blacklist = ["all", "post"];
    return Object.keys(data.collections)
      .filter((d) => !blacklist.includes(d))
      .sort()
      .map(d => `<div class="tag" category="${d}">${d}</div>`)
      .join('');
  }

  log(data) {
    console.log(data);
  }
}

module.exports = Projects;