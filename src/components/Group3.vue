<template>
  <div class="container">

    <div class="flex gap-5  mt-20">
      <img src="/group3.png" alt="" />
      <div class="gap-10">
        <h1 class="font-semibold text-3xl text-[#474747] max-w-[1000px] mx-8 mt-10
        ">
          You want to strengthen more of communities or groups you are
          associated with.
        </h1>
        <p class="max-w-[600px] text-[#666666]  m-10 font-light">
          A simple definition is that leadership is the art of motivating a
          group of people to act towards achieving a common goal. In a business
          setting, this can mean directing workers and colleagues with a
          strategy to meet the company's needs.
        </p>
         <router-link to="/explore" class="text-white hover:text-[#4579CB] bg-[#4579CB] rounded-xl p-3 px-5 hover:bg-blue-300 mx-10" @click="toggleModal">
            Explore More
          </router-link>
      </div>
    </div>
    </div>
  
</template>

<script setup></script>

<style lang="scss" scoped></style>
