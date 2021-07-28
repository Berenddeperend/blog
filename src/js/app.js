function onDropdownTriggerClicked(e)  {
  e.preventDefault();
  document.querySelector('.dropdown-content').classList.toggle('open')
  window.addEventListener('click', outsideDropdownClickedChecker);
};

function outsideDropdownClickedChecker(e) {
  const clickedWithin = e.target.closest('.dropdown')
  const clickedLink = clickedWithin && e.target.localName === 'a';

  if (!clickedWithin || clickedLink) {
    document.querySelector('.dropdown-content').classList.remove('open');
    window.removeEventListener('click', outsideDropdownClickedChecker);
  }
}

document
  .querySelector(".dropdown-trigger")
  .addEventListener("click", onDropdownTriggerClicked);
