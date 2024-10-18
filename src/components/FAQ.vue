<template>
  <div class="container flex flex-col items-center  p-6">
    <div class="max-w-4xl w-full">
      <h2 class="text-3xl font-semibold text-center mb-4 text-[#474747]">Frequently Asked Questions</h2>
      <p class="text-center text-[#666666] mb-8">
        In order to acquire the goods and services that will satisfy the various needs that you have in your life, you have six concentric circles or realms to explore. Beginning in the center and radiating outwards, these realms are:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(item, index) in faqLeft" :key="index" class="border rounded-lg p-4">
          <button @click="toggleFaq(index)" class="flex justify-between items-center w-full text-left font-medium text-[#8C8C8C]">
            <span>+ {{ item.title }}</span>
            <span :class="{'rotate-180': item.open}" class="transform transition-transform">&#9662;</span>
          </button>
          <div v-if="item.open" class="mt-2 text-gray-600">{{ item.content }}</div>
        </div>
        <div v-for="(item, index) in faqRight" :key="index" class="border rounded-lg p-4">
          <button @click="toggleFaq(index, 'right')" class="flex justify-between items-center w-full text-left font-medium text-[#8C8C8C]">
            <span>+ {{ item.title }}</span>
            <span :class="{'rotate-180': item.open}" class="transform transition-transform">&#9662;</span>
          </button>
          <div v-if="item.open" class="mt-2 text-gray-600">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqLeft: [
        { title: "General", content: "General FAQ content goes here.", open: false },
        { title: "Registration", content: "Registration FAQ content goes here.", open: false },
        { title: "Trade Partners", content: "Trade Partners FAQ content goes here.", open: false },
        { title: "My Showcase", content: "My Showcase FAQ content goes here.", open: false },
      ],
      faqRight: [
        { title: "All Showcase", content: "All Showcase FAQ content goes here.", open: false },
        { title: "My Account", content: "My Account FAQ content goes here.", open: false },
        { title: "Help", content: "Help FAQ content goes here.", open: false },
        { title: "Support", content: "Support FAQ content goes here.", open: false },
      ],
    };
  },
  methods: {
    toggleFaq(index, side = 'left') {
      const faqSection = side === 'left' ? this.faqLeft : this.faqRight;
      faqSection[index].open = !faqSection[index].open;
    },
  },
};
</script>

<style scoped>
/* Additional styling can be added here */
</style>
