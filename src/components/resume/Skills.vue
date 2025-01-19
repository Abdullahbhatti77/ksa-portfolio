<template>
  <div>
    <p class="text-sm font-poppins tracking-2px font-medium text-pink mt-10">
      Features
    </p>
    <p class="mt-3 text-2xl lg:text-4xl font-bold text-dark font-montserrat">
      Skills
    </p>
    <!-- Grid layout for displaying skills -->
    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      <!-- Loop through skills array -->
      <div v-for="(skill, index) in skills" :key="index">
        <!-- Skill name and styling -->
        <div class="flex justify-between items-center mb-4">
          <span
            class="tracking-2px font-medium text-xs font-montserrat text-primary uppercase"
            >{{ skill.name }}</span
          >
        </div>
        <!-- Skill progress bar -->
        <div
          class="relative w-full bg-gray-300 h-3 rounded-full border-2 border-[#dce1e4]"
        >
          <!-- Progress bar with dynamic width -->
          <div
            class="h-2 rounded-full gradient-progress"
            :style="{ width: skill.currentPercentage + '%' }"
          ></div>
          <!-- Percentage label -->
          <div
            class="absolute bottom-2 -translate-y-1/2 transform text-gray-700 text-sm percentage-label"
            :style="{ left: skill.currentPercentage + '%' }"
          >
            {{ skill.currentPercentage }}%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SKILLS } from "../../constant/constant.js";
export default {
  data() {
    return {
      skills: SKILLS.map(skill => ({
        ...skill,
        currentPercentage: 0, // Initialize currentPercentage to 0 for animation start
      })),
    };
  },
  mounted() {
    // Call method to animate progress bars after component is mounted
    this.animateProgressBars();
  },
  methods: {
    animateProgressBars() {
      // Use a single timeout to animate all progress bars at once
      setTimeout(() => {
        // Set current percentage to target percentage for all skills at once
        this.skills.forEach(skill => {
          skill.currentPercentage = skill.percentage;
        });
      }, 300); // Start animation after a short delay to allow for DOM rendering
    },
  },
};
</script>

<style scoped>
.gradient-progress {
  background: linear-gradient(to right, #f8f8f8, #ff6584); /* Gradient background for progress bar */
  transition: width 0.8s ease-in-out; /* Smooth width transition animation */
}
.percentage-label {
  transition: left 0.8s ease-in-out; /* Smooth left position transition animation */
  white-space: nowrap; /* Ensure label text doesn't wrap */
  transform: translateX(-100%); /* Initial position off-screen */
}
</style>
