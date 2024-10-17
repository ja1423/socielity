<template>
  <div class="container">
    <div class="flex justify-between m-4">
      <div>
        <h1 class="text-[#4579CB] font-bold mt-2 hover:animate-pulse text-3xl">
          Sociolity
        </h1>
      </div>
      <div class="flex gap-8">
        <div class="gap-6 flex m-4">
          <router-link
            to="/sociolity"
            class="text-[#666666] font-semibold hover:text-black"
            >Socielity</router-link
          >
          <router-link
            to="/resources"
            class="text-[#666666] font-semibold hover:text-black"
            >Resources</router-link
          >
          <router-link
            to="/platform"
            class="text-[#666666] font-semibold hover:text-black"
            >Platfrom</router-link
          >
          <router-link
            to="/support"
            class="text-[#666666] font-semibold hover:text-black"
            >Support</router-link
          >
          <router-link
            to="/login"
            class="text-[#666666] font-semibold hover:text-black"
            >Login</router-link
          >
        </div>
        <div class="bg-[#4579CB] rounded-2xl p-4 hover:bg-white">
          <router-link to="/explore" class="text-white hover:text-[#4579CB]" @click="toggleModal">
            Explore More
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
