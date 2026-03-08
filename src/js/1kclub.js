document.addEventListener('alpine:init', () => {
  Alpine.data('stronk', () => ({
    open: false,

    toggle() {
      this.open = !this.open;
      if (this.open) this.animateBars();
    },

    animateBars() {
      this.$root.querySelectorAll('[data-target]').forEach(el => {
        const inner = el.firstElementChild;
        const target = Number(el.dataset.target);
        const pr = Number(inner.dataset.pr);
        const category = el.closest('[data-stronk-category]').dataset.stronkCategory;
        const highest = this.getHighestTarget(category);
        const width = el.closest('.lift-column').clientWidth;

        el.style.width = this.map(target, 0, highest, 0, width) + 'px';
        inner.style.transition = 'unset';
        inner.style.width = '0';

        setTimeout(() => {
          inner.style.transition = 'width 1s cubic-bezier(0.33, 1, 0.68, 1)';
          inner.style.width = this.map(pr, 0, highest, 0, width) + 'px';
        });
      });
    },

    getHighestTarget(category) {
      const els = this.$root.querySelectorAll(`[data-stronk-category="${category}"] [data-target]`);
      return Math.max(...[...els].map(el => Number(el.dataset.target)));
    },

    map(x, inMin, inMax, outMin, outMax) {
      return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }
  }));
});
