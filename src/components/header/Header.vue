<template>
  <div class="bg-grey">
    <Navbar
      :isMenuOpen="isMenuOpen"
      :showShadow="showShadow"
      @scroll-to-section="scrollToSection"
      @toggle-menu="toggleMenu"
    />
    <MenuOverlay
      :isMenuOpen="isMenuOpen"
      @scroll-to-section="scrollToSection"
      @toggle-menu="toggleMenu"
    />
  </div>
</template>

<script>
import MenuOverlay from "./MenuOverlay.vue";
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar,
    MenuOverlay,
  },
  data() {
    return {
      isMenuOpen: false,
      showShadow: false,
    };
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
