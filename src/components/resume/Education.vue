<template>
  <div>
    <p class="mt-10 text-sm font-medium font-poppins tracking-2px text-pink">
      2015 - 2023
    </p>
    <p class="mt-3 text-2xl lg:text-4xl font-bold text-dark font-montserrat">
      Education Quality
    </p>
    <div class="relative mt-14">
      <div
        class="absolute top-0 h-full border-r-2 border-gray-200 lg:left-[7px] sm:left-[1px]"
      ></div>
      <div class="grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-2">
        <div
          v-for="(item, index) in education"
          :key="index"
          class="flex items-center w-full mb-8 group"
        >
          <!-- Node (circle with icon) -->
          <div
            class="z-10 flex items-center justify-center w-1 h-1 lg:w-4 lg:h-4 font-semibold text-center text-gray-600 transition rounded-full shadow-md group-hover:text-pink"
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
              class="mt-5 text-base lg:text-lg font-normal lg:h-40 xl:h-28 opacity-90 text-primary group-hover:text-white font-poppins text-justify"
            >
              {{ item.description }}
            </p>
            <!-- <div class="mt-4 text-right">
            <span class="px-3 py-1 text-sm font-semibold text-red-500 bg-red-100 rounded-full">{{ item.rating }}</span>
             </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EDUCATION } from "../../constant/constant.js";
export default {
  // props: ['title', 'time', 'cardTitle', 'cardSubtitle', 'cardDescription'],
  data() {
    return {
      education: EDUCATION,
    };
  },
};
</script>
<style scoped>
.group:hover .card-bg {
  background: linear-gradient(145deg, #ff014f, #d11414);
}
</style>
