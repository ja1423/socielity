<template>
  <div class="container py-10">
    <h2 class="text-2xl font-bold text-center text-gray-800 mb-4">Award Winning Engagement Platform</h2>
    <p class="text-center text-gray-500 mb-10">
      The private online marketplace where you are able to exchange goods and services, cash-free, in one place, 24/7, with a select group of individuals, organizations, and businesses that you know and trust.
    </p>

    <!-- Swiper -->
    <swiper :slides-per-view="3" :space-between="30" loop pagination navigation>
      <swiper-slide v-for="award in awards" :key="award.id" class="p-4">
        <div class="grid grid-cols-1 gap-4 bg-white shadow-lg rounded-lg p-4">
          <img :src="award.image" alt="award badge" class="mx-auto mb-4 h-32" />
          <h3 class="text-center text-xl font-bold text-gray-800">{{ award.title }}</h3>
          <p class="text-center text-gray-600">{{ award.description }}</p>
        </div>
      </swiper-slide>

      <!-- Pagination and navigation buttons -->
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      awards: [
        { id: 1, title: "Award 2021", description: "Winning Engagement Platform that you know and trust", image: "/award1.png" },
        { id: 2, title: "Award 2021", description: "Winning Engagement Platform that you know and trust", image: "/award2.png" },
        { id: 3, title: "Award 2012", description: "Winning Engagement Platform that you know and trust", image: "/award3.png" },
        { id: 4, title: "Award 2013", description: "Winning Engagement Platform that you know and trust", image: "/award4.png" },
        { id: 5, title: "Award 2014", description: "Winning Engagement Platform that you know and trust", image: "/award5.png" },
        { id: 6, title: "Award 2020", description: "Winning Engagement Platform that you know and trust", image: "/award6.png" },
        { id: 7, title: "Award 2015", description: "Winning Engagement Platform that you know and trust", image: "/award1.png" },
      ],
    };
  },
};
</script>

<style scoped>
.swiper-button-next, .swiper-button-prev {
  color: #333;
}
</style>
