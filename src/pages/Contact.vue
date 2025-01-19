<template>
  <section class="py-24 border-b-2" id="contact">
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="100"
      data-aos-once="true"
    >
      <p
        class="font-medium text-pink text-sm font-montserrat tracking-2px text-center"
      >
        CONTACT
      </p>
      <p
        class="text-4xl md:text-5xl xl:text-6xl font-bold sm:mt-2 lg:mt-4 font-montserrat text-primary text-center mb-16"
      >
        Contact With US
      </p>
    </div>
    <div
      class="flex lg:flex-row flex-col lg:space-x-12 lg:space-y-0 sm:space-y-12"
    >
      <ContactSection class="lg:w-[40%]" />
      <ContactForm class="lg:w-[60%]" />
    </div>
  </section>
</template>

<script>
import ContactSection from "../components/contact/ContactSection.vue";
import ContactForm from "../components/contact/ContactForm.vue";
export default {
  components: {
    ContactSection,
    ContactForm,
  },
};
</script>

<style></style>
