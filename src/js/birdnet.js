document.addEventListener('alpine:init', () => {
  Alpine.data('birdnet', () => ({
    open: true,
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
    },

    toggle() {
      this.open = !this.open;
    },



  }));
});
