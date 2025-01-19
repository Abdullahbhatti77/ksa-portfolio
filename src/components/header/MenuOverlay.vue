<template>
  <div>
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-50"
        @click="toggleMenu"
      ></div>
    </transition>

    <transition name="slide">
      <div
        v-if="isMenuOpen"
        class="fixed inset-y-0 left-0 w-72 md:w-96 bg-grey shadow-md z-50 overflow-y-auto px-2 md:px-10 py-6"
      >
        <div class="flex items-center justify-between">
          <img
            class="size-12 rounded-full"
            src="../../assets/footer-logo.jpg"
            alt="Profile"
            loading="lazy"
          />
          <button
            @click="toggleMenu"
            class="text-pink p-2 rounded-full shadow-2xl shadow-slate-400 bg-gradient-to-r from-gray-100 to-white"
          >
            <svg
              class="md:size-6 size-4"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p class="text-primary text-base font-poppins py-6 border-b-2">
          Mr. Khalid Pervaiz
        </p>
        <div
          class="mt-5 text-sm font-montserrat text-primary font-medium"
          @click="toggleMenu"
        >
          <a
            href="#home"
            class="block py-3 rounded-md text-primary hover:text-pink"
            @click.prevent="scrollToSection('home')"
            >HOME</a
          >
          <a
            href="#about-us"
            class="block py-3 rounded-md text-primary hover:text-pink"
            @click.prevent="scrollToSection('about-us')"
            >About US</a
          >
          <a
            href="#portfolio"
            class="block py-3 rounded-md text-primary hover:text-pink"
            @click.prevent="scrollToSection('portfolio')"
            >Products</a
          >
          <a
            href="#portfolio"
            class="block py-3 rounded-md text-primary hover:text-pink"
            @click.prevent="scrollToSection('portfolio')"
            >Projects</a
          >
          <a
            href="#reviews"
            class="block py-3 rounded-md text-primary hover:text-pink"
            @click.prevent="scrollToSection('reviews')"
            >Reviews</a
          >
          <a
            href="#contact"
            class="block py-3 rounded-md text-primary hover:text-pink"
            @click.prevent="scrollToSection('contact')"
            >CONTACT</a
          >
        </div>
        <!-- <div class="border-t mt-28">
          <p
            class="text-primary my-4 text-sm font-poppins font-medium tracking-2px"
          >
            FIND WITH ME
          </p>
          <div class="flex space-x-6 text-pink">
            <Icon
              icon="fa-linkedin-in"
              href="https://www.linkedin.com/in/muhammad-abdullah190/"
              showPink="true"
              shouldLift="true"
            />
            <Icon
              icon="fa-github"
              href="https://github.com/Abdullahbhatti77"
              showPink="true"
              shouldLift="true"
            />
          </div>
        </div> -->
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from "../Icon.vue";
export default {
  props: ["isMenuOpen"],
  methods: {
    scrollToSection(sectionId) {
      this.$emit("scroll-to-section", sectionId);
    },
    toggleMenu() {
      this.$emit("toggle-menu");
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter, .slide-leave-to /* .slide-leave-active in <2.1.8 */ {
  transform: translateX(-100%);
}
</style>
