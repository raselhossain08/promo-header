<script setup>
import LeftBar from './components/LeftBar.vue'
import RightBar from './components/RightBar.vue'
</script>

<template>
  <main class="overflow-hidden ">
    <!-- top-bar -->
    <div class="flex items-center justify-center w-full h-10 text-center bg-black">
      <p class="pb-2 text-lg text-white ">Promo Header</p>
    </div>

    <!-- Side-bar -->
    <div class="row">
      <div class="border-black col-md-6 col-sm-12 col-12 border-e">
        <LeftBar />
      </div>
      <div class="col-md-6 col-sm-12 col-12">
        <RightBar/>
      </div>
    </div>
  </main>
</template>
