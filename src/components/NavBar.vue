<script setup lang="ts">
  import { computed } from 'vue'
  import { useNav } from '@/composables/nav'

  const { navlinks, currentPath } = useNav()
  const desktopNavTabs = computed(() => {
    return navlinks.value.slice(0, 2)
  })
  const mobileNavTabs = computed(() => {
    return navlinks.value.slice(2, navlinks.value.length)
  })
</script>
<template>
  <div class="w-full">
    <nav class>
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex h-24 items-center justify-between">
          <div class="flex items-center justify-between w-full">
            <div class="flex flex-shrink-0 items-center">
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
                  </g></svg
                ><span class="font-sans relative text-2xl top-1"
                  >The Spotted Kingfisher</span
                ></a
              >
            </div>
            <IslandNavBarDesktopMenu
              :navlinks="desktopNavTabs"
              :current-path="currentPath"
              class="hidden md:flex md:ml-6"
              client:media="screen and (min-width: 768px)"
            />
          </div>
          <IslandDarkModeSwitch client:load />
          <div class="-mr-2 items-center relative">
            <IslandNavBarMobileMenuButton
              v-if="mobileNavTabs.length"
              class="hidden md:block"
              client:load
            />
            <IslandNavBarMobileMenuButton
              v-if="navlinks.length"
              class="md:hidden"
              client:load
            />
            <IslandNavBarMobileMenu
              class="hidden md:flex md:justify-end absolute right-0 mt-4"
              :navlinks="mobileNavTabs"
              :current-path="currentPath"
              client:media="screen and (min-width: 768px)"
            />
          </div>
        </div>
      </div>
      <IslandNavBarMobileMenu
        class="md:hidden"
        :navlinks="navlinks"
        :current-path="currentPath"
        client:media="screen and (max-width: 768px)"
      />
    </nav>
  </div>
</template>
<style scoped></style>
