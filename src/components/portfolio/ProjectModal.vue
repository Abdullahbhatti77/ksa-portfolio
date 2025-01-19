<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-grey bg-opacity-90 flex justify-center items-center z-50"
  >
    <div
      class="card-bg rounded-lg p-4 md:p-10 lg:p-14 max-w-full md:max-w-4xl lg:max-w-6xl w-full relative overflow-y-auto sm:mx-4 xl:mx-0 md:mx-6"
    >
      <button
        @click.stop="closeModal"
        class="text-pink p-3 rounded-full bg-grey hover:bg-pink absolute sm:top-1 sm:right-1 md:top-2 md:right-2 hover:text-white transition-colors duration-200"
      >
        <svg
          class="h-5 w-5"
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
      <div class="sm:mt-7 md:mt-0">
        <div class="">
          <img
            :src="project.imageSrc"
            alt="Project Image"
            class="w-full sm:h-[300px] md:h-[400px] lg:min-h-[500px] md:min-h-full rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show", "project"],
  methods: {
    closeModal() {
      console.log("ssdkl");
      this.$emit("close");
    },
  },
};
</script>
