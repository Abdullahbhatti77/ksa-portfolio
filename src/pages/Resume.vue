<template>
  <section class="py-24 border-b-2" id="resume">
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="100"
      data-aos-once="true"
    >
      <p
        class="font-medium text-pink text-sm font-montserrat tracking-2px text-center"
      >
        1+ YEAR OF EXPERIENCE
      </p>
      <p
        class="text-4xl md:text-5xl xl:text-6xl font-bold sm:mt-2 lg:mt-4 font-montserrat text-primary text-center mb-16"
      >
        My Resume
      </p>
    </div>
    <ResumeNavbar @update:selected="selected = $event" />
    <div>
      <component :is="currentComponent" />
    </div>
  </section>
</template>

<script>
import ResumeNavbar from "../components/resume/ResumeNavbar.vue";
import Experience from "../components/resume/Experience.vue";
import Skills from "../components/resume/Skills.vue";
import Achievements from "../components/resume/Acheivements.vue";
import Education from "../components/resume/Education.vue";

export default {
  components: {
    ResumeNavbar,
    Experience,
    Skills,
    Achievements,
    Education,
  },
  data() {
    return {
      selected: 0,
    };
  },
  computed: {
    currentComponent() {
      switch (this.selected) {
        case 0:
          return "Education";
        case 1:
          return "Skills";
        case 2:
          return "Experience";
        case 3:
          return "Achievements";
        default:
          return "Education";
      }
    },
  },
};
</script>
