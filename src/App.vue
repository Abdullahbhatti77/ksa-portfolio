<template>
  <div class="bg-grey">
    <Header />
    <div class="sm:mx-4 md:mx-10 xl:mx-16 2xl:mx-[600px]">
      <Hero />
      <AboutUs />
      <Features />
      <Portfolio />
      <Reviews />
      <!-- <Resume /> -->
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import Hero from "./pages/Hero.vue";
import AboutUs from "./pages/AboutUs.vue";
import Features from "./pages/Features.vue";
import Portfolio from "./pages/Portfolio.vue";
import Resume from "./pages/Resume.vue";
import Contact from "./pages/Contact.vue";
import Footer from "./components/Footer.vue";
import Reviews from "./pages/Reviews.vue";
export default {
  components: {
    Header,
    Hero,
    AboutUs,
    Features,
    Portfolio,
    Reviews,
    // Resume,
    Contact,
    Footer,
  },
};
</script>

<style>
/* .card-bg {
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
}

.group:hover .card-bg {
  background: linear-gradient(145deg, #ff014f, #d11414);
} */
.image-container {
  overflow: hidden;
  border-radius: 10px;
}

.image-container img {
  transition: transform 0.3s ease-in-out;
}

.image-container:hover img {
  transform: scale(1.06);
}
.card-bg {
  position: relative;
  overflow: hidden;
  box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
}

.card-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  transition: opacity 0.2s ease-in-out;
  z-index: -1;
}

.group:hover .card-bg::before {
  opacity: 0;
}

.card-bg::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, #ff014f, #d11414);
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
  z-index: -1;
}

.group:hover .card-bg::after {
  opacity: 1;
}

.card-bg > * {
  position: relative;
  z-index: 1;
}

.group-hover .card-bg > img {
  transform: scale(1.1);
}
</style>
