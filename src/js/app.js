if (document.title.includes("Projects")) {
  const allTags = Array.from(document.querySelectorAll(".taglist .tag")).map(
    (element) => {
      return element.innerText.split(' ')[0];
    }
  );

  document.querySelector(".taglist").addEventListener("click", (e) => {
    if (Array.from(e.target.classList).includes("tag")) {
      e.target.classList.toggle("active");

      const activeTags = Array.from(
        document.querySelectorAll(".taglist .tag.active")
      ).map((element) => {
        return element.innerText.split(' ')[0];
      });

      document.querySelectorAll(".post-overview-item").forEach((element) => {
        if (activeTags.length === 0) {
          element.classList.remove("hibbem");
        } else {
          if (
            element
              .getAttribute("category")
              .split(",")
              .map(d => d.trim())
              .some((tag) => {
                return activeTags.includes(tag);
              })
          ) {
            element.classList.remove("hibbem");
          } else {
            element.classList.add("hibbem");
          }
        }
      });
    }
  });

  const activeTags = [];
}
