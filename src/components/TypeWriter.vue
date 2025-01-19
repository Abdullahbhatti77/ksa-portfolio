<template>
  <div>
    <span class="text-pink">a <nbsp /></span
    ><span ref="typedElement" class="font-bold"></span>
    <span class="typed-cursor text-pink">|</span>
  </div>
</template>

<script>
import Typed from "typed.js";

export default {
  mounted() {
    const options = {
      strings: ["Developer.", "Programmer.", "Problem Solver."],
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: false, // Disable the default cursor
    };

    this.typed = new Typed(this.$refs.typedElement, options);
  },
  beforeDestroy() {
    // Destroy the Typed instance when the component is destroyed
    if (this.typed) {
      this.typed.destroy();
    }
  },
};
</script>

<style>
.typed-cursor {
  display: inline-block;
  animation: blink 1s infinite step-end;
}

@keyframes blink {
  from,
  to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
