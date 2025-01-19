<template>
  <a :href="href" target="_blank" class="block">
    <div
      class="relative px-[20px] py-[17px] rounded-6px"
      :class="{
        'transform hover:-translate-y-1 transition duration-500': shouldLift,
        'hover-gradient': showPink,
      }"
    >
      <i :class="iconClass" style="font-size: 23px"></i>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    shouldLift: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    showPink: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconClass() {
      return `fab ${this.icon}`;
    },
  },
};
</script>

<style scoped>
.relative {
  position: relative;
}

.relative::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
  border-radius: 6px;
  z-index: -1;
  transition: opacity 0.2s ease-in-out;
  opacity: 1; /* Initial state */
}

.relative:hover::before {
  opacity: 0; /* Fade out initial background on hover */
}

.hover-gradient {
  position: relative;
  z-index: 0; /* Ensure the content is above the gradient */
}

.hover-gradient::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(145deg, #ff014f, #d11414); /* Hover gradient */
  border-radius: 6px;
  z-index: -1;
  opacity: 0; /* Initial state */
  transition: opacity 0.2s ease-in-out;
}

.hover-gradient:hover::after {
  opacity: 1; /* Show hover gradient smoothly */
}

.hover-gradient {
  transition: transform 0.5s ease;
}

.hover-gradient:hover {
  color: white;
  transform: translateY(-3px); /* Adjust the amount of lift */
  z-index: 1; /* Ensure it lifts above the previous shadow */
}
</style>
