const { createApp, ref } = Vue;  // Import Composition API functions

createApp({
  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    return { count, increment };  // Expose state to the template
  }
}).mount("#app");
