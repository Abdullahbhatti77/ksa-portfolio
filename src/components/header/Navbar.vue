<template>
  <nav
    class="fixed top-0 w-full z-30 bg-grey"
    :class="{ 'shadow-lg': showShadow }"
  >
    <div class="sm:mx-2 md:mx-10 xl:mx-8 py-4 2xl:mx-14">
      <div class="flex justify-between items-center">
        <div>
          <img
            src="../../assets/footer-logo.jpg"
            alt=""
            class="lg:size-12 size-9 rounded-full"
          />
        </div>
        <!-- <div class="flex">
          <div class="shrink-0 flex items-center">
            <img
              class="h-14 w-14 rounded-full"
              src="../../assets/small-profile-pic.png"
              alt="Profile"
              loading="lazy"
            />
            <span class="ml-2 font-semibold text-lg">PORTFOLIO</span>
          </div>
        </div> -->
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
            href="#about-us"
            class="inline-flex items-center px-1 pt-1 text-primary hover:text-pink"
            @click.prevent="scrollToSection('about-us')"
            >About US</a
          >
          <a
            href="#features"
            class="inline-flex items-center px-1 pt-1 text-primary hover:text-pink"
            @click.prevent="scrollToSection('features')"
            >Products</a
          >
          <a
            href="#portfolio"
            class="inline-flex items-center px-1 pt-1 text-primary hover:text-pink"
            @click.prevent="scrollToSection('portfolio')"
            >Projects</a
          >
          <a
            href="#reviews"
            class="inline-flex items-center px-1 pt-1 text-primary hover:text-pink"
            @click.prevent="scrollToSection('reviews')"
            >Reviews</a
          >
          <a
            href="#contact"
            class="inline-flex items-center px-1 pt-1 text-primary hover:text-pink"
            @click.prevent="scrollToSection('contact')"
            >Contact</a
          >
        </div>
        <div class="flex xl:hidden">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-pink"
          >
            <span class="sr-only">Toggle main menu</span>
            <i
              :class="isMenuOpen ? 'fa fa-bars' : 'fas fa-bars'"
              class="text-xl"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["isMenuOpen", "showShadow"],
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
