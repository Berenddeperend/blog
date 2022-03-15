function arduinoMap(x, in_min, in_max, out_min, out_max) {
  return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

function setBarWidths() {
  barFuncs.forEach((barFunc) => barFunc());
}

const barFuncs = [];

[...document.querySelectorAll("[data-target]")].map((el) => {
  const target = el.dataset.target;
  const pr = el.firstElementChild.dataset.pr;

  const adjustedTarget = arduinoMap(target, 0, 200, 0, 108);
  const adjustedPr = arduinoMap(pr, 0, 200, 0, 108);

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
