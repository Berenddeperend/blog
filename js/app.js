function onDropdownTriggerClicked(e) {
  e.preventDefault();
  document.querySelector(".dropdown-content").classList.toggle("open");
  window.addEventListener("click", outsideDropdownClickedChecker);
}

function outsideDropdownClickedChecker(e) {
  const clickedWithin = e.target.closest(".dropdown");
  const clickedLink = clickedWithin && e.target.localName === "a";

  if (!clickedWithin || clickedLink) {
    document.querySelector(".dropdown-content").classList.remove("open");
    window.removeEventListener("click", outsideDropdownClickedChecker);
  }
}

document
  .querySelector(".dropdown-trigger")
  .addEventListener("click", onDropdownTriggerClicked);

if (document.title.includes("Projects")) {
  const allTags = Array.from(document.querySelectorAll(".taglist .tag")).map(
    (element) => {
      return element.innerText;
    }
  );

  document.querySelector(".taglist").addEventListener("click", (e) => {
    if (Array.from(e.target.classList).includes("tag")) {
      e.target.classList.toggle("active");

      const activeTags = Array.from(
        document.querySelectorAll(".taglist .tag.active")
      ).map((element) => {
        return element.innerText;
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
