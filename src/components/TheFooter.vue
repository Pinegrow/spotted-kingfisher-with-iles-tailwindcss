<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'TheFooter',
  // 	},
  // })
</script>
<template>
  <footer class="pt-12">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start lg:w-1/3"
        >
          <a
            href="/"
            class="flex items-center text-primary-600 dark:text-primary-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="2em"
              width="2em"
              class="inline mr-2"
            >
              <path
                d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256z"
                fill="currentColor"
                class="text-primary-500"
              ></path>
              <g fill="currentColor" class="text-gray-800">
                <path
                  d="M351.2 232c16.7 16.7 16.7 43.9 0 60.6l-61.7 61.7c-16.7 16.7-43.9 16.7-60.6 0l-.2-.2c-16.7-16.7-16.7-43.9 0-60.6l61.7-61.7c16.7-16.7 43.9-16.7 60.6 0l.2.2z"
                ></path>
                <path
                  d="M297.4 239.4c21.1 21.1 24.6 52 7.7 68.9-16.9 16.9-47.7 13.5-68.9-7.7-21.1-21.1-24.6-52-7.7-68.9 16.9-16.9 47.8-13.5 68.9 7.7zm-36.2-84.9c13.1 13.1 13.1 34.2 0 47.3-13.1 13.1-34.2 13.1-47.3 0-13.1-13.1-13.1-34.2 0-47.3 13.1-13.1 34.2-13.1 47.3 0zm-62.6 62.6c13.1 13.1 13.1 34.2 0 47.3-13.1 13.1-34.2 13.1-47.3 0-13.1-13.1-13.1-34.2 0-47.3 13.1-13.1 34.2-13.1 47.3 0zM194.1 303c10.9 10.9 10.9 28.7 0 39.6-10.9 10.9-28.7 10.9-39.6 0-10.9-10.9-10.9-28.7 0-39.6 10.9-10.9 28.6-10.9 39.6 0zm145.4-145.4c10.9 10.9 10.9 28.7 0 39.6-10.9 10.9-28.7 10.9-39.6 0-10.9-10.9-10.9-28.7 0-39.6 10.9-10.9 28.6-10.9 39.6 0z"
                ></path>
              </g>
            </svg>
            <span class="font-sans relative text-2xl top-1"
              >The Spotted Kingfisher</span
            >
          </a>
          <p class="mt-2 text-center w-full lg:text-left">
            Conserve the world's most important forests to sustain nature's
            diversity, benefit our climate, and support human well-being.
          </p>
          <div class="inline-flex mt-6 space-x-3">
            <div class="flex flex-wrap space-x-4">
              <a
                href="https://www.facebook.com/vuedesigner"
                aria-label="facebook"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-facebook"
                  class="text-2xl"
                ></BaseIcon> </a
              ><a
                href="https://twitter.com/vuedesigner"
                aria-label="twitter"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-twitter"
                  class="text-2xl"
                ></BaseIcon> </a
              ><a
                href="https://discord.gg/BYp45Nnu5T"
                aria-label="discord"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-discord-icon"
                  class="text-2xl"
                ></BaseIcon>
              </a>
              <a
                href="https://www.youtube.com/@vuedesigner"
                aria-label="youtube"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-youtube-icon"
                  class="text-2xl"
                ></BaseIcon>
              </a>
            </div>
          </div>
          <div class="my-6 text-center">
            <a>+1 234 567-890</a> <br /><a>hello@fantico.com</a>
          </div>
        </div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start"
        >
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            General
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <a href="/" class="hover:text-primary-600 dark:text-primary-200"
                >FAQ</a
              >
            </li>
            <li class="mb-4">
              <a href="/" class="hover:text-primary-600 dark:text-primary-200"
                >News</a
              >
            </li>
            <li class="mb-4">
              <a href="/" class="hover:text-primary-600 dark:text-primary-200"
                >Careers</a
              >
            </li>
            <li class="mb-4">
              <a href="/" class="hover:text-primary-600 dark:text-primary-200"
                >Contact Us</a
              >
            </li>
          </ul>
        </div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start"
        >
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Links
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <a
                href="/articles"
                class="hover:text-primary-600 dark:text-primary-200"
                >Articles</a
              >
            </li>
            <li class="mb-4">
              <a
                href="/blog"
                class="hover:text-primary-600 dark:text-primary-200"
                >Blog</a
              >
            </li>
            <li class="mb-4">
              <a
                href="/volunteer"
                class="hover:text-primary-600 dark:text-primary-200"
                >Contact Us</a
              >
            </li>
          </ul>
        </div>
        <div class="flex flex-col sm:w-full md:items-end">
          <hr class="mb-4 opacity-25" />
          <p class="py-1 text-sm sm:text-center">
            &copy; 2002 - 2021. All Rights Reserved - Company Name
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
