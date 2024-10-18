<template>
  <div class="flex flex-col items-center justify-center p-4">
    <div class="bg-white p-8  text-center w-full">
      <h2 class="text-3xl font-semibold text-[#474747] mb-4">Subscribe to get the latest news about us</h2>
      <p class=" mb-6 max-w-[700px] text-[#666666] mx-auto">
        Socielity offers insured and non-insured individuals access to affordable, convenient, and personalized care for urgent and ongoing medical conditions.
      </p>
      <div class="flex items-center max-w-xl mx-auto py-5 bg-[#E6E6E6] border rounded-xl">
        <input 
          type="email" 
          placeholder="Enter your email address" 
          class="flex-grow px-4 py-2  focus:outline-none bg-[#E6E6E6]"
        />
        <button 
          class="bg-blue-600 text-white px-4 py-2 mx-4 rounded-xl hover:bg-blue-700 focus:outline-none">
          Subscribe Now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubscriptionForm",
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
