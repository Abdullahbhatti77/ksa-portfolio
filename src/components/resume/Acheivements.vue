<template>
  <div>
    <p class="text-sm font-poppins tracking-2px font-medium text-pink mt-10">
      2023-2024
    </p>
    <p class="mt-3 text-2xl lg:text-4xl font-bold text-dark font-montserrat">
      Achievements
    </p>
    <div class="relative mt-14">
      <div
        class="border-r-2 border-gray-200 absolute h-full top-0 lg:left-[7px] sm:left-[1px]"
      ></div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5">
        <div
          v-for="(item, index) in achivements"
          :key="index"
          class="mb-8 flex items-center w-full group"
        >
          <!-- Node (circle with icon) -->
          <div
            class="z-10 shadow-md rounded-full w-1 h-1 lg:w-4 lg:h-4 text-center flex items-center justify-center font-semibold text-gray-600 group-hover:text-pink transition"
          >
            <i class="fas fa-circle"></i>
          </div>
          <!-- Card content -->
          <div
            class="w-full p-4 md:p-7 xl:px-10 xl:py-12 md:ml-6 sm:ml-4 rounded-6px card-bg"
          >
            <h3
              class="text-xl lg:text-2xl font-medium text-dark font-poppins group-hover:text-white"
            >
              {{ item.title }}
            </h3>
            <p
              class="mt-2 mb-6 lg:mb-10 text-sm font-normal text-primary group-hover:text-white font-poppins"
            >
              {{ item.subtitle }}
            </p>
            <p class="border-b-2"></p>
            <p
              class="mt-5 text-base lg:text-lg font-normal xl:h-28 opacity-90 text-primary group-hover:text-white font-poppins text-justify"
            >
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ACHIVEMENTS } from "../../constant/constant.js";
export default {
  data() {
    return {
      achivements: ACHIVEMENTS,
    };
  },
};
</script>
<style scoped>
.group:hover .card-bg {
  background: linear-gradient(145deg, #ff014f, #d11414);
}
</style>
