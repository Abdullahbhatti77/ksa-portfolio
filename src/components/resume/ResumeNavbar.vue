<template>
  <div class="card-bg rounded-10px flex md:justify-around md:flex-row sm:flex-col">
    <div
      v-for="(item, index) in items"
      :key="index"
      @click="selectItem(index)"
      :class="[
        'cursor-pointer md:w-48 lg:w-60 xl:w-96 h-16 lg:h-20 flex justify-center items-center rounded-lg text-sm md:text-sm lg:text-base xl:text-lg font-poppins font-medium hover:text-pink',
        selected === index ? 'card-bg text-pink shadow-md' : 'text-dark',
      ]"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["Education", "Professional Skills", "Experience", "Achievements "],
      selected: 0,
    };
  },
  methods: {
    selectItem(index) {
      this.selected = index;
      this.$emit("update:selected", index);
    },
  },
};
</script>