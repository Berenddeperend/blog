function onDropdownTriggerClicked(e)  {
  e.preventDefault();
  document.querySelector('.dropdown-content').classList.toggle('open')
  window.addEventListener('click', outsideDropdownClickedChecker);
};

function outsideDropdownClickedChecker(e) {
  const clickedWithin = e.target.closest('.dropdown')

  if (!clickedWithin) {
    document.querySelector('.dropdown-content').classList.toggle('open');
    window.removeEventListener('click', outsideDropdownClickedChecker);
  }
}

document
  .querySelector(".dropdown-trigger")
  .addEventListener("click", onDropdownTriggerClicked);
