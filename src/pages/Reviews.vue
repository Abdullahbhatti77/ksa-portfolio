<template>
  <section class="py-24 border-b-2" id="reviews">
    <!-- Header Section -->
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="100"
      data-aos-once="true"
      class="text-center sm:text-center md:text-left"
    >
      <!-- Features Label -->
      <p class="font-medium text-pink text-sm font-montserrat tracking-[2px]">
        Reviews
      </p>
      <!-- Main Heading -->
      <p
        class="text-4xl md:text-5xl lg:text-6xl font-bold sm:mt-2 lg:mt-4 font-montserrat text-primary"
      >
        See What Our Customers Say
      </p>
    </div>

    <!-- Features Grid -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 2xl:gap-x-12 gap-y-12 mt-14"
    >
      <!-- Feature Cards -->
      <FeatureCard
        v-for="(feature, index) in features"
        :key="index"
        :title="feature.title"
        :description="feature.description"
        :delay="feature.delay"
        :stars="feature.stars"
      />
    </div>
  </section>
</template>

<script>
import FeatureCard from "../components/features/FeatureCard.vue";
import { REVIEWS } from "../constant/constant";

export default {
  components: {
    FeatureCard,
  },
  data() {
    return {
      features: REVIEWS, // Use the imported data
    };
  },
  // mounted() {
  //   this.$aos.refresh();
  // }
};
</script>
