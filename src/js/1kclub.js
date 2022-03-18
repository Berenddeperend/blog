function arduinoMap(x, in_min, in_max, out_min, out_max) {
  return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

function setBarWidths() {
  barFuncs.forEach((barFunc) => barFunc());
}

const barFuncs = [];

const highestTarget = Math.max(
  ...[...document.querySelectorAll("[data-target]")].map((el) =>
    parseInt(el.dataset.target)
  )
);

const $lastPr = document.querySelector("[data-last-pr-date]");
const lastDate = new Date($lastPr.dataset.lastPrDate);
const differenceInDays = Math.floor((new Date() - lastDate) / (1000 * 3600 * 24));
if(differenceInDays === 1) {
  document.querySelector('.last-pr-days-plural').classList.add('hibbem')
}
$lastPr.innerHTML = differenceInDays

const $dropdownContent = document.querySelector(".dropdown-content");
const availableWidth =
  $dropdownContent.clientWidth -
  parseInt(window.getComputedStyle($dropdownContent).paddingLeft) -
  parseInt(window.getComputedStyle($dropdownContent).paddingRight);

[...document.querySelectorAll("[data-target]")].map((el) => {
  const target = el.dataset.target;
  const pr = el.firstElementChild.dataset.pr;

  const adjustedTarget = arduinoMap(
    target,
    0,
    highestTarget,
    0,
    availableWidth
  );
  const adjustedPr = arduinoMap(pr, 0, highestTarget, 0, availableWidth);

  el.style.width = adjustedTarget + "px";

  barFuncs.push(() => {
    el.firstElementChild.style.transition = "unset";
    el.firstElementChild.style.width = "0";

    setTimeout(() => {
      el.firstElementChild.style.transition =
        "width 1s cubic-bezier(0.33, 1, 0.68, 1)";
      el.firstElementChild.style.width = adjustedPr + "px";
    });
  });
});
