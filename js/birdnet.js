document.addEventListener('alpine:init', () => {
  Alpine.data('birdnet', () => ({
    open: false,
    offline: true,
    sorting: 'time',
    todaysDetections: [],
    recentDetections: [],

    async init() {
      try {
        const [todayData, recentData] = await Promise.all([
          fetch('https://berendswennenhuis.nl/api/birdnet/today').then(r => r.json()),
          fetch('https://berendswennenhuis.nl/api/birdnet/recent').then(r => r.json()),
        ]);
        this.todaysDetections = todayData;
        this.recentDetections = recentData.filter((d,i) => i < todayData.length);
        this.offline = false;
        this.$nextTick(() => this.animateList());
      } catch (e) {
        console.log('could not fetch data!');
      }
    },

    toggleMode(mode) {
      if (this.sorting === mode) return;
      this.animateList();
      this.sorting = mode;
    },

    get birdList() {
      return this.sorting === 'quantity'
        ? this.todaysDetections.map((value) => {
            return {  col1: value.count,  col2: value.Com_Name}
          })
        : this.recentDetections.map((value) => {
          return {  col1: value.Time,  col2: value.Com_Name}
        })
    },

    toggleDropdown() {
      this.open = !this.open;
      if (this.open) {
        this.$nextTick(() => this.animateList());
      }
    },

    animateList() {
      this.$root.querySelectorAll('.bird-table').forEach((table) => {
        table.querySelectorAll('tr').forEach((tr, i) => {
          tr.style.animation = 'none';
          tr.offsetHeight;
          tr.style.animation = `bird-fade-in 0.6s ease forwards`;
          tr.style.animationDelay = `${(i * 25)}ms`;
        });
      })
    },
  }));
});
