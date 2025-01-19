<template>
  <div class="rounded-10px p-7 card-bg">
    <form
      class="space-y-4"
      method="POST"
      action="https://formspree.io/f/xbllvwdj"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label
            for="name"
            class="block text-primary text-xs font-medium tracking-1px mb-4 font-montserrat uppercase"
            >Your Name</label
          >
          <input
            type="text"
            id="name"
            name="name"
            class="border-2 border-gray-300 rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-pink"
            required
          />
        </div>
        <div>
          <label
            for="phone"
            class="block text-primary text-xs font-medium tracking-1px mb-4 font-montserrat uppercase"
            >Phone Number</label
          >
          <input
            type="tel"
            id="phone"
            name="phone"
            class="border-2 border-gray-300 rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-pink"
            required
          />
        </div>
      </div>

      <div>
        <label
          for="email"
          class="block text-primary text-xs font-medium tracking-1px mb-4 font-montserrat uppercase"
          >Email</label
        >
        <input
          type="email"
          id="email"
          name="email"
          class="border-2 border-gray-300 rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-pink"
          required
        />
      </div>

      <div>
        <label
          for="subject"
          class="block text-primary text-xs font-medium tracking-1px mb-4 font-montserrat uppercase"
          >Subject</label
        >
        <input
          type="text"
          id="subject"
          name="subject"
          class="border-2 border-gray-300 rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-pink"
          required
        />
      </div>

      <div>
        <label
          for="message"
          class="block text-primary text-xs font-medium tracking-1px mb-4 font-montserrat uppercase"
          >Your Message</label
        >
        <textarea
          id="message"
          name="message"
          class="border-2 border-gray-300 rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-pink"
          rows="10"
          required
        ></textarea>
      </div>

      <div
        class="group w-full transform hover:-translate-y-1.5 transition duration-500"
      >
        <button
          type="submit"
          class="mt-8 card-bg text-pink group-hover:text-white w-full rounded-md py-4 text-sm font-medium flex items-center justify-center"
        >
          SEND MESSAGE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5 ml-1 mt-0.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>
