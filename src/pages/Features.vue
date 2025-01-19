<template>
  <section class="py-24 border-b-2" id="features">
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
        Products
      </p>
      <!-- Main Heading -->
      <p
        class="text-4xl md:text-5xl lg:text-6xl font-bold sm:mt-2 lg:mt-4 font-montserrat text-primary"
      >
        Our Marble, Your Masterpiece
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
        :image="feature.image"
        :delay="feature.delay"
      />
    </div>
  </section>
</template>

<script>
import FeatureCard from "../components/features/FeatureCard.vue";
import { FEATURES } from "../constant/constant";

export default {
  components: {
    FeatureCard,
  },
  data() {
    return {
      features: FEATURES, // Use the imported data
    };
  },
  // mounted() {
  //   this.$aos.refresh();
  // }
};
</script>
