<template>
  <div
    class="group relative transform hover:-translate-y-2 transition duration-500"
  >
    <div
      class="card-bg rounded-10px p-8 lg:p-12"
      data-aos="fade-up"
      data-aos-duration="500"
      :data-aos-delay="delay"
      data-aos-once="true"
    >
      <!-- <img
        :src="image"
        alt="Feature Image"
        class="w-14 h-14 rounded-lg group-hover:scale-110 transition-all duration-300 svg-image"
        loading="lazy"
      /> -->
      <p
        class="text-2xl font-medium text-dark font-poppins mt-4 md:mt-9 lg:mt-7 group-hover:text-white"
      >
        {{ title }}
      </p>
      <!-- Star Ratings -->
      <div class="flex items-center mt-2">
        <span v-for="n in stars" :key="n" class="text-yellow-500 text-lg mr-1">
          ★
        </span>
        <!-- <span
          v-for="n in 5 - stars"
          :key="'empty-' + n"
          class="text-gray-300 text-lg mr-1"
        >
          ★
        </span> -->
      </div>
      <p
        class="text-primary md:h-28 lg:h-20 xl:h-24 mt-4 group-hover:text-white text-base font-poppins opacity-85 leading-28px text-justify"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.svg-image {
  filter: none;
  transition: filter ease;
}

.group:hover .svg-image {
  filter: brightness(0) invert(1); /* This will turn the image white */
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    delay: {
      type: Number,
      required: false,
      default: 100,
    },
    stars: {
      type: Number,
      required: false,
    },
  },
};
</script>
