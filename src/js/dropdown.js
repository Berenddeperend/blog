function onDropdownTriggerClicked(dropdown) {
  const namespace = dropdown.closest('.dropdown').dataset.dropdown;
  
  const el = document.querySelector(`[data-dropdown=${namespace}] .dropdown-content`);
  
  if(!el.classList.contains('open')) {
    setBarWidths();
  }

  el.classList.toggle("open");
  window.addEventListener("click", outsideDropdownClickedChecker );
}

function outsideDropdownClickedChecker(e) {
  const clickedWithin = e.target.closest(".dropdown");
  const clickedLink = clickedWithin && e.target.localName === "a";

  if (!clickedWithin || clickedLink) {
    document.querySelector(".dropdown-content.open").classList.remove("open");
    window.removeEventListener("click", outsideDropdownClickedChecker);
  }
}

document.querySelectorAll(".dropdown-trigger").forEach((dropdown) => {
  dropdown.addEventListener("click", onDropdownTriggerClicked.bind(this, dropdown));
});