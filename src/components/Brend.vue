<template>
  <div class="container md:py-[71px] max-md:pt-[60px]">
     <div class="text-center mt-8">
        <h5 class="text-2xl font-semibold mt-8">Trusted By</h5>
        <p class="max-w-[1050px] text-[#666666] mx-auto m-10 font-light">
          The private on-line marketplace where you are able to exchange goods
          and services, cash-free, in one place, 24/7, with a select group of
          individuals, organizations, and businesses that you know and trust.
        </p>
      </div>
    <div
      class="carousel-wrapper "
      :style="{ '--ani-speed': `${animationSpeed}s` }"
    >
      <div class="carousel">
        <!-- Render each logo item -->
        <div class="item" v-for="(item, index) in logos" :key="index">
          <img :src="item.src" :alt="item.alt" />
        </div>
        <!-- Duplicate items to ensure smooth scrolling -->
        <div
          class="item"
          v-for="(item, index) in logos"
          :key="'duplicate-' + index"
        >
          <img :src="item.src" :alt="item.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const logos = [
  { src: "/PWC.png", alt: "Brand 1" },
  { src: "/target.png", alt: "Brand 2" },
  { src: "/zoom.png", alt: "Brand 3" },
  { src: "/dropbox.png", alt: "Brand 1" },
  { src: "/paypal.png", alt: "Brand 2" },
  { src: "/pfizer.png", alt: "Brand 3" },
  { src: "/PWC.png", alt: "Brand 1" },
  { src: "/target.png", alt: "Brand 2" },
  { src: "/zoom.png", alt: "Brand 3" },
  { src: "/dropbox.png", alt: "Brand 1" },
  { src: "/paypal.png", alt: "Brand 2" },
  { src: "/pfizer.png", alt: "Brand 3" },
 
];

const animationSpeed = ref(30); // Initial speed in seconds

const increaseSpeed = () => {
  animationSpeed.value = Math.max(10, animationSpeed.value - 5); // Decrease speed (increase animation speed)
};

const decreaseSpeed = () => {
  animationSpeed.value = Math.min(60, animationSpeed.value + 5); // Increase speed (decrease animation speed)
};
</script>

<style scoped>
:root {
  --bg-clr: #64748b;
}

.carousel-wrapper {
  --width: 300px; /* Adjust as needed */
  --num-items: 9; /* Number of items to show */

  width: 100%; /* Full width */
  overflow: hidden;
  position: relative;
}
.carousel-wrapper::before,
.carousel-wrapper::after {
  content: "";
  position: absolute;
  width: 100%; /* Adjust gradient width as needed */
  height: 100%;
  z-index: 1;
  top: 0;
}
.carousel-wrapper::before {
  left: 0;
  background-image: linear-gradient(
    to right,
    var(--bg-clr) 0%,
    transparent 100%
  );
}
.carousel-wrapper::after {
  right: 0;
  background-image: linear-gradient(
    to left,
    var(--bg-clr) 0%,
    transparent 100%
  );
}

.carousel {
  display: flex;
  align-items: center;
  animation: slide var(--ani-speed) linear infinite;
}
.item {
  flex: 1 0 var(--width);
  text-align: center;
  padding: 1rem;
}
.item > img {
  width: 100%; /* Ensure the image fills its container */
  height: auto; /* Maintain aspect ratio */
  max-height: 120px; /* Adjust maximum height as needed */
  object-fit: contain; /* Ensure the image scales without cropping */
}

@keyframes slide {
  100% {
    transform: translateX(calc(var(--width) * var(--num-items) * -1));
  }
}
</style>