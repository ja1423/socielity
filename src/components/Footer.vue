<template>
  <div class="bg-[#4579CB]">
    <div class="container flex justify-between mt-5">
      <div class="mt-7">
        <router-link to="/" class="text-3xl text-white font-semibold ">Socielity</router-link>
        <p class="text-white font-extralight max-w-[300px] mt-6">
          Your private online marketplace where you can trade goods and services
          with family, friends, neighbors, classmates, co-workers, and members
          of the many other Socielities that comprise your personal world.
        </p>
      </div>
     <div class="mt-7 mb-5">
    <h1 class="text-white text-2xl font-semibold mb-6">Company</h1>
    <ul class="space-y-2">
      <li>
        <router-link to="/help-center" class="text-white hover:text-gray-300 font-extralight">
          Help Center
        </router-link>
      </li>
      <li>
        <router-link to="/explore" class="text-white hover:text-gray-300 font-extralight">
          About
        </router-link>
      </li>
      <li>
        <router-link to="/press" class="text-white hover:text-gray-300 font-extralight">
          Press
        </router-link>
      </li>
      <li>
        <router-link to="/blog" class="text-white hover:text-gray-300 font-extralight">
          Blog
        </router-link>
      </li>
      <li>
        <router-link to="/careers" class="text-white hover:text-gray-300 font-extralight">
          Careers
        </router-link>
      </li>
      <li>
        <router-link to="/faqs" class="text-white hover:text-gray-300 font-extralight">
          FAQs
        </router-link>
      </li>
    </ul>
  </div>
      <div class="mt-7">
        <h2 class="text-white text-2xl font-semibold mb-6">Sociality</h2>
        <ul class="space-y-2">
          <li><a href="#" class="text-white hover:text-gray-300 font-extralight">User Agreement</a></li>
          <li><a href="#" class="text-white hover:text-gray-300 font-extralight">Privacy Policy</a></li>
          <li><a href="#" class="text-white hover:text-gray-300 font-extralight">Sociality Guidelines</a></li>
          <li><a href="#" class="text-white hover:text-gray-300 font-extralight">Cookie Policy</a></li>
          <li><a href="#" class="text-white hover:text-gray-300 font-extralight">My Account</a></li>
        </ul>
      </div>

      <div class="flex flex-col my-12 mt-6">
        <h1 class="text-4xl text-white font-semibold">Contact us</h1>
        <div class="flex gap-2 mt-6">
          <img src="/email.svg" alt="Email Icon">
          <!-- Added mailto link for email -->
          <a href="mailto:contact@example.com" class="text-white">contact@example.com</a>
        </div>
        <div class="flex gap-2">
          <img src="/phone.svg" alt="Phone Icon">
          <p class="text-white">+152 534-468-854</p>
        </div>
        <div class="flex gap-2">
          <img src="/location.svg" alt="Location Icon">
          <!-- Added Google Maps link -->
          <a href="https://www.google.com/maps?q=Your+Location+Address" target="_blank" class="text-white hover:text-gray-300">View on Google Map</a>
        </div>

        <!-- Social Media Links -->
        <div class="flex gap-5 mt-4">
          <a href="https://www.facebook.com/" aria-label="Facebook"><img src="/facebook.svg" alt="Facebook" /></a>
          <a href="https://www.instagram.com/" aria-label="Instagram"><img src="/instagram.svg" alt="Instagram" /></a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn"><img src="/linkedin.svg" alt="LinkedIn" /></a>
          <a href="https://x.com/?lang=en" aria-label="Twitter"><img src="/twitter.svg" alt="Twitter" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
