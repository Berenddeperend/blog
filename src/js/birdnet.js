document.addEventListener('alpine:init', () => {
  Alpine.data('birdnet', () => ({
    open: false,
    offline: true,
    birdnetData: [],

    async init() {
      console.log('initialized');
      const data = await fetch('http://192.168.2.17:3080/api/today')
        .then(response => {
          this.offline = false;
          return response.json()})
        .catch(()=> {
          console.log('could not fetch data!')
        });

      console.log(data);
      this.birdnetData = data;
      this.$nextTick(() => this.animateBars());
    },

    toggle() {
      this.open = !this.open;
      if (this.open) {
        this.$nextTick(() => this.animateBars());
      }
    },

    animateBars() {
      this.$root.querySelectorAll('.bird-table tr').forEach((tr, i) => {
        tr.style.animation = 'none';
        tr.offsetHeight;
        tr.style.animation = `bird-fade-in 0.6s ease forwards`;
        tr.style.animationDelay = `${(i * 15) + 50}ms`;
      });
    },



  }));
});
