<template>
  <section
    class="flex flex-col lg:flex-row justify-between pb-24 pt-20 gap-20 2xl:pt-[200px] border-b-2"
    id="about-us"
  >
    <!-- Right Column: Image -->
    <div class="lg:w-[50%] w-full flex md:w-full lg:order-first sm:order-last">
      <img
        src="../assets/about-us-image.jpeg"
        alt="Hero Image"
        class="rounded-lg w-full object-cover shadow-2xl h-[570px]"
        loading="lazy"
      />
    </div>
    <!-- Left Column -->
    <div
      class="lg:w-[50%] w-full md:text-left flex flex-col justify-between lg:order-first sm:order-last sm:mt-12 lg:mt-0"
    >
      <div>
        <!-- Intro Text -->
        <p
          class="text-sm tracking-[3px] uppercase mb-5 font-montserrat text-primary font-medium"
        >
          About US
        </p>
        <!-- Main Heading -->
        <p
          class="text-4xl md:text-5xl xl:text-6xl font-bold text-dark mb-6 font-montserrat"
        >
          Crafting Excellence
        </p>
        <!-- Typing Effect Placeholder -->
        <p
          class="text-2xl md:text-4xl xl:text-5xl font-semibold text-pink mb-8 font-montserrat"
        >
          in Marble Tiles
          <!-- <TypingEffect /> -->
        </p>
        <!-- Description -->
        <p
          class="text-primary font-poppins font-normal opacity-85 mb-8 leading-[30px] text-justify"
        >
          With years of expertise in the marble industry, we proudly offer a
          wide range of high-quality marble tiles that redefine elegance and
          style. Our mission is to provide innovative and durable solutions for
          homes, offices, and commercial spaces. We carefully source the finest
          materials to ensure exceptional quality and craftsmanship in every
          tile. Whether you're enhancing a small area or designing a grand
          space, our premium marble tiles deliver timeless beauty, durability,
          and sophistication, backed by our commitment to outstanding customer
          service.
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
        <!-- <div
          class="group w-full transform hover:-translate-y-1.5 transition duration-500"
        >
          <button
            type="submit"
            class="mt-8 card-bg text-pink group-hover:text-white w-full rounded-md py-4 text-sm font-medium flex items-center justify-center"
          >
            Explore Our Collection
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
            Request a Free Quote
          </button>
        </div> -->
      </div>
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
};
</script>
