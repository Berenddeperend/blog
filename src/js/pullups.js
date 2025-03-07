const fetchPullups = fetch('https://pullup-counter-backend.test.coddin.io/api/berend').then(response => {
  return response.json();
}).then(data => {
  const $container = document.querySelector('[data-stronk-category="pullups"]');

  $container.querySelector('[data-target]').dataset.target = data.count;

  $container.querySelector('.pullups').innerHTML = data.count;

  document.querySelector('[data-stronk-category="pullups"] [data-pr]').dataset.pr = data.count;
});
