<template>
  <section class="py-24 border-b-2" id="portfolio">
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="100"
      data-aos-once="true"
    >
      <p
        class="font-medium text-pink text-sm font-montserrat tracking-2px text-center"
      >
        VISIT OUR PORTFOLIO AND KEEP YOUR FEEDBACK
      </p>
      <p
        class="text-4xl md:text-5xl xl:text-6xl font-bold sm:mt-2 lg:mt-4 font-montserrat text-primary text-center mb-16"
      >
        Projects
      </p>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 2xl:gap-x-12"
    >
      <Card
        v-for="(project, index) in projects"
        :key="index"
        :imageSrc="project.imageSrc"
        :title="project.title"
        :subtitle="project.subtitle"
        :description="project.description"
        :description2="project.description2"
        :link1="project.link1"
        :link2="project.link2"
        @click="openModal(project)"
        :delay="project.delay"
      />
    </div>
    <ProjectModal
      v-if="isModalVisible"
      :show="isModalVisible"
      :project="selectedProject"
      @close="closeModal"
    />
  </section>
</template>

<script>
import Card from "../components/portfolio/ProjectCard.vue";
import ProjectModal from "../components/portfolio/ProjectModal.vue";
import { PROJECTS } from "../constant/constant.js";

export default {
  data() {
    return {
      projects: PROJECTS,
      isModalVisible: false,
      selectedProject: null,
    };
  },
  components: {
    Card,
    ProjectModal,
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedProject = null;
    },
  },
};
</script>
