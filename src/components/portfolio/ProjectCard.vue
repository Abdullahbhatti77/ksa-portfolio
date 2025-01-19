<template>
  <div
    class="sm:p-5 md:p-8 cursor-pointer rounded-20px card-bg"
    @click="handleClick"
    data-aos="fade-up"
    data-aos-duration="500"
    :data-aos-delay="delay"
    data-aos-once="true"
  >
    <div class="image-container">
      <img
        class="w-full md:h-[210px] h-[270px] lg:h-[300px] xl:h-[260px] 2xl:h-[260px] rounded-lg"
        :src="imageSrc"
        alt="Card Image"
        loading="lazy"
      />
    </div>
    <!-- <div class="mt-8">
      <p
        class="mb-2 text-xs font-medium uppercase text-pink font-poppins tracking-1px"
      >
        {{ title }}
      </p>
      <div class="flex items-center justify-between">
        <p
          class="text-2xl font-semibold text-dark font-montserrat hover:text-pink"
        >
          {{ subtitle }}
        </p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: [
    "imageSrc",
    "title",
    "subtitle",
    "link1",
    "link2",
    "description",
    "description2",
    "delay",
  ],
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
