<template>
  <div class="card-bg rounded-10px px-4 py-8 md:p-7">
    <div class="image-container mx-auto">
      <img
        src="../../assets/contact1.png"
        alt="Profile"
        class="md:h-80 lg:h-56 xl:h-64 object-cover md:w-full rounded-xl"
        loading="lazy"
      />
    </div>

    <div class="mt-7">
      <h2 class="text-3xl font-bold text-dark mb-2 font-montserrat">
        Mr. Khalid Pervaiz
      </h2>
      <p class="mb-4 text-lg font-poppins font-normal text-primary">
        Proprietor
      </p>
      <p
        class="mb-6 text-lg font-poppins font-normal text-primary text-justify"
      >
        Let’s Create Something Beautiful Together.
      </p>
      <p
        class="mb-6 text-lg font-poppins font-normal text-primary text-justify"
      >
        Have questions or need a custom quote? We’re here to help! Contact us
        today to discuss your project and explore how we can bring your ideas to
        life.
      </p>

      <div class="mb-4">
        <p class="text-lg font-poppins font-normal text-primary">
          Phone: +92 325-694-8487
        </p>
        <p class="text-lg font-poppins font-normal text-primary">
          Email: khalidmughal0501@gmail.com
        </p>
      </div>

      <!-- <p class="text-sm font-medium mt-9 font-montserrat text-dark">
        FIND ME ON
      </p>
      <div class="flex space-x-5 mt-5 mb-4">
        <Icon
          icon="fa-linkedin-in"
          href="https://www.linkedin.com/in/muhammad-abdullah190/"
          :showPink="true"
          :shouldLift="true"
        />
        <Icon
          icon="fa-github"
          href="https://github.com/Abdullahbhatti77"
          :showPink="true"
          :shouldLift="true"
        />
      </div> -->
    </div>
  </div>
</template>

<script>
import Icon from "../Icon.vue";
export default {
  components: {
    Icon,
  },
};
</script>
