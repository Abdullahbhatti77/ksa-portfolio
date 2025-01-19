<template>
  <section
    class="flex flex-col lg:flex-row justify-between pb-24 pt-28 2xl:pt-[200px] border-b-2"
    id="home"
  >
    <!-- Left Column -->
    <div
      class="lg:w-[50%] w-full md:text-left flex flex-col justify-between lg:order-first sm:order-last sm:mt-12 lg:mt-0"
    >
      <div>
        <!-- Intro Text -->
        <p
          class="text-sm tracking-[3px] uppercase mb-5 font-montserrat text-primary font-medium"
        >
          Welcome to KSA Enterprises
        </p>
        <!-- Main Heading -->
        <p
          class="text-4xl md:text-5xl xl:text-6xl font-bold text-dark mb-6 font-montserrat"
        >
          Crafting Elegance
        </p>
        <!-- Typing Effect Placeholder -->
        <p
          class="text-2xl md:text-4xl xl:text-5xl font-semibold text-pink mb-8 font-montserrat"
        >
          One Marble at a Time
          <!-- <TypingEffect /> -->
        </p>
        <!-- Description -->
        <p
          class="text-primary font-poppins font-normal opacity-85 mb-8 leading-[30px] text-justify"
        >
          Explore our premium marble collections, crafted to bring timeless
          beauty and exceptional quality to your spaces. With unique patterns,
          rich textures, and luxurious finishes, our marble elevates any
          environment with sophistication. From classic to bold designs, our
          range suits every style, blending durability and elegance to transform
          homes, offices, and commercial spaces into stunning masterpieces
        </p>
      </div>

      <!-- Social and Skills -->
      <div
        class="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0 space-x-0 md:space-x-16"
      >
        <!-- Find Me Section -->
        <!-- <div>
          <button
            class="mb-5 text-sm font-medium font-poppins text-dark tracking-[2px]"
          >
            View Our Collection
          </button>
        </div> -->
        <!-- <a href="#about-us" @click.prevent="scrollToSection('about-us')"> -->
        <!-- <div
          class="group w-full transform hover:-translate-y-1.5 transition duration-500"
        >
          <button
            type="submit"
            class="mt-8 card-bg text-pink group-hover:text-white w-full rounded-md py-4 text-sm font-medium flex items-center justify-center"
          >
            View Our Collection
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5 ml-1 mt-0.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div> -->
        <!-- </a> -->
        <!-- Best Skill Section -->
        <!-- <div>
          <p
            class="mb-5 sm:mt-4 md:mt-0 text-sm font-medium font-poppins text-dark tracking-[2px]"
          >
            Get a Quote
          </p>
        </div> -->
        <!-- <div
          class="group w-full transform hover:-translate-y-1.5 transition duration-500"
        >
          <button
            type="submit"
            class="mt-8 card-bg text-pink group-hover:text-white w-full rounded-md py-4 text-sm font-medium flex items-center justify-center"
          >
            Get a Quote
          </button>
        </div> -->
      </div>
    </div>

    <!-- Right Column: Image -->
    <div
      class="lg:w-[50%] w-full flex justify-center lg:justify-end md:w-full lg:order-last sm:order-first"
    >
      <img
        src="../assets/hero-image.jpg"
        alt="Hero Image"
        class="rounded-lg lg:w-[360px] xl:w-[520px] object-cover shadow-2xl xl:h-[500px]"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script>
import Icon from "../components/Icon.vue";
import TypingEffect from "../components/TypeWriter.vue";
export default {
  components: {
    Icon,
    TypingEffect,
  },
  methods: {
    scrollToSection(sectionId) {
      this.$emit("scroll-to-section", sectionId);
    },
    toggleMenu() {
      this.$emit("toggle-menu");
    },
  },
};
</script>
