function onDropdownTriggerClicked(e)  {
  e.preventDefault();
  document.querySelector('.dropdown-content').classList.toggle('open')
  window.addEventListener('click', outsideDropdownClickedChecker);
};

function outsideDropdownClickedChecker(e) {
  const clickedWithin = e.target.closest('.dropdown')
  console.log('clickedWithin: ', clickedWithin);

  if (!clickedWithin) {
    document.querySelector('.dropdown-content').classList.remove('open');
    window.removeEventListener('click', outsideDropdownClickedChecker);
  }
}

document
  .querySelector(".dropdown-trigger")
  .addEventListener("click", onDropdownTriggerClicked);
