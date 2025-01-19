<template>
  <div>
    <nav
      class="fixed top-0 w-full z-10 bg-grey"
      :class="{ 'shadow-lg': showShadow }"
    >
      <div class="sm:mx-2 md:mx-10 xl:mx-8 py-4 2xl:mx-14">
        <div class="flex justify-between">
          <div class="flex">
            <div class="shrink-0 flex items-center">
              <img
                class="h-14 w-14 rounded-full"
                src="../assets/small-profile-pic.png"
                alt="Profile"
                loading="lazy"
              />
              <span class="ml-2 font-semibold text-lg">INBIO</span>
            </div>
          </div>
          <div
            class="hidden xl:flex md:space-x-8 font-montserrat text-sm font-semibold"
          >
            <a
              href="#home"
              class="inline-flex items-center px-1 pt-1 text-primary hover:text-pink"
              @click.prevent="scrollToSection('home')"
              >HOME</a
            >
            <a
              href="#features"
              class="inline-flex items-center px-1 pt-1 text-primary hover:text-pink"
              @click.prevent="scrollToSection('features')"
              >FEATURES</a
            >
            <a
              href="#portfolio"
              class="inline-flex items-center px-1 pt-1 text-primary hover:text-pink"
              @click.prevent="scrollToSection('portfolio')"
              >PORTFOLIO</a
            >
            <a
              href="#resume"
              class="inline-flex items-center px-1 pt-1 text-primary hover:text-pink"
              @click.prevent="scrollToSection('resume')"
              >RESUME</a
            >
            <a
              href="#contact"
              class="inline-flex items-center px-1 pt-1 text-primary hover:text-pink"
              @click.prevent="scrollToSection('contact')"
              >CONTACT</a
            >
            <!-- <span class="hidden md:flex items-center">
            <button class="text-pink-600 font-semibold py-2 px-4 card-bg">
              Dark
            </button>
          </span> -->
          </div>
          <div class="flex xl:hidden">
            <button
              @click="toggleMenu"
              class="inline-flex items-center justify-center p-2 rounded-md text-pink"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  :class="{ hidden: isMenuOpen, 'inline-flex': !isMenuOpen }"
                  class="inline-flex"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  :class="{ hidden: !isMenuOpen, 'inline-flex': isMenuOpen }"
                  class="hidden"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-40"
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
            class="h-12 w-12 rounded-full"
            src="../assets/profile-pic.png"
            alt="Profile"
            loading="lazy"
          />
          <button
            @click="toggleMenu"
            class="text-pink p-2 rounded-full shadow-2xl shadow-slate-400 bg-gradient-to-r from-gray-100 to-white"
          >
            <svg
              class="h-6 w-6"
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
          Inbio is a personal portfolio template. You can customize all.
        </p>
        <div class="mt-5 text-sm font-montserrat text-primary font-medium">
          <a
            href="#home"
            class="block py-3 rounded-md text-primary hover:text-pink"
            @click.prevent="scrollToSection('home')"
            >HOME</a
          >
          <a
            href="#features"
            class="block py-3 rounded-md text-primary hover:text-pink"
            @click.prevent="scrollToSection('features')"
            >FEATURES</a
          >
          <a
            href="#portfolio"
            class="block py-3 rounded-md text-primary hover:text-pink"
            @click.prevent="scrollToSection('portfolio')"
            >PORTFOLIO</a
          >
          <a
            href="#resume"
            class="block py-3 rounded-md text-primary hover:text-pink"
            @click.prevent="scrollToSection('resume')"
            >RESUME</a
          >
          <a
            href="#contact"
            class="block py-3 rounded-md text-primary hover:text-pink"
            @click.prevent="scrollToSection('contact')"
            >CONTACT</a
          >
          <!-- <div class="mt-4">
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-pink-600 bg-white border border-gray-300">BUY NOW</a>
          </div> -->
        </div>
        <div class="border-t mt-28">
          <p
            class="text-primary my-4 text-sm font-poppins font-medium tracking-2px"
          >
            FIND WITH ME
          </p>
          <div class="flex space-x-4 text-pink">
            <Icon
              icon="fa-linkedin-in"
              href="https://www.linkedin.com"
              showPink="true"
              shouldLift="true"
            />
            <Icon
              icon="fa-github"
              href="https://www.linkedin.com"
              showPink="true"
              shouldLift="true"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  data() {
    return {
      isMenuOpen: false,
      showShadow: false,
    };
  },
  components: {
    Icon,
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      this.showShadow = window.scrollY > 0;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
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
